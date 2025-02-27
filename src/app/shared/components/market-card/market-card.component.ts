import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { IMarket } from '../../model/interfaces';
import { PriceChartComponent } from "../price-chart/price-chart.component";
import { MarketPriceChangesComponent } from "../market-price-changes/market-price-changes.component";
import { Router } from '@angular/router';
import { CRYPTO_PROFILE_PAGE } from '../../constants';

@Component({
  selector: 'app-market-card',
  imports: [
    CommonModule,
    MarketPriceChangesComponent,
    PriceChartComponent
  ],
  templateUrl: './market-card.component.html',
  styleUrl: './market-card.component.scss',
})
export class MarketCardComponent {

  market = input.required<IMarket>();
  currency = input.required<string>();

  displayDetail = signal<boolean>(false);

  constructor(
    private _router: Router,
  ) { }

  detail() {
    if (this.displayDetail()){
      this._router.navigate([CRYPTO_PROFILE_PAGE, this.market().id])
    }
  }
}
