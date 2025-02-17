import { TranslateModule } from '@ngx-translate/core';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-calculate',
  imports: [
    CommonModule,
    HeaderComponent,
    TranslateModule,
    ReactiveFormsModule,
],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.scss',
})
export class CalculateComponent {

  priceControl = new FormControl('');
  stopLossPrice!: number;
  profitPrice!: number;
  coppiedText!: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
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
  }

  calculateProfit() {
    const price = Number(this.priceControl.value);
    const profit = price * 0.1;
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
