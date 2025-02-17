import { Component, input } from '@angular/core';
import { PriceChangePercentagePipe } from "../../pipes/price-change-percentage.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-price-changes',
  imports: [
    CommonModule,
    PriceChangePercentagePipe],
  templateUrl: './market-price-changes.component.html',
  styleUrl: './market-price-changes.component.scss'
})
export class MarketPriceChangesComponent {
  high = input.required<number | undefined>();
  low = input.required<number | undefined>();
}
