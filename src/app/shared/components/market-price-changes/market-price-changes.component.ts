import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MarketPriceChangePipe } from "../../pipes/market-price-change.pipe";

@Component({
  selector: 'app-market-price-changes',
  imports: [
    CommonModule,
    MarketPriceChangePipe
  ],
  templateUrl: './market-price-changes.component.html',
  styleUrl: './market-price-changes.component.scss',
  providers:[DecimalPipe]
})
export class MarketPriceChangesComponent {
  percentage = input.required<number | undefined>();
}
