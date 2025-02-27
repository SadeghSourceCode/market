import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { ProfitCardComponent } from "../../shared/components/profit-card/profit-card.component";

@Component({
  selector: 'app-calculate',
  imports: [
    CommonModule,
    HeaderComponent,
    TranslateModule,
    ReactiveFormsModule,
    ProfitCardComponent
],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.scss',
})
export class CalculateComponent {

  priceControl = new FormControl('');
  unitControl = new FormControl('');
  stopLossPrice!: number;
  profitPrice!: number;
  coppiedText!: number;

  profitMessage!: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private _translate: TranslateService,
  ) {


    this.priceControl.valueChanges.subscribe((value) => {
      if (value === null || isNaN(Number(value))) {
        this.priceControl.setValue('');
      }
      else {
        this.calculateStopLoss();
        this.calculateProfit();
      }
    });

    this.unitControl.valueChanges.subscribe((value) => {
      if (value === null || isNaN(Number(value))) {
        this.unitControl.setValue('');
      }
      else {
        if (this.priceControl.value != null && this.priceControl.value !== '') {
          const price = Number(this.priceControl.value);
          this.profitMessage =
            this._translate.instant(
              'PROFIT_MESSAGE',
              {
                buyUnit: this.unitControl.value,
                sellUnit: price / 0.2,
                sellPrice: this.profitPrice
              }
            );
        }
      }
    });
  }

  calculateProfit() {
    const price = Number(this.priceControl.value);
    const profit = price * 0.2;
    this.profitPrice = price + profit;

  }

  calculateStopLoss() {
    const price = Number(this.priceControl.value);
    this.stopLossPrice = price * 0.9;
  }

  copyToClipboard(value: number) {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(value.toString()).then(() => {
        this.coppiedText = value;
        setTimeout(() => {
          this.coppiedText = 0;
        }, 3000);
      }, (err) => {
        console.error('Could not copy text: ', err);
      });
    }
  }
}
