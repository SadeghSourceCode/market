import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IMarket } from '../../model/interfaces';
import { PriceChartComponent } from "../price-chart/price-chart.component";
import { MarketPriceChangesComponent } from "../market-price-changes/market-price-changes.component";

@Component({
  selector: 'app-market-card',
  standalone: true,
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

}
