import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IMarket } from '../../model/interfaces';
import { MarketPriceChangesComponent } from "../market-price-changes/market-price-changes.component";
import { PriceChartComponent } from "../price-chart/price-chart.component";

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketCardComponent {

  market = input.required<IMarket>();
  currency = input.required<string>();

}
