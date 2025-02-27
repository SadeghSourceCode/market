import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-profit-card',
  imports: [
    CommonModule
  ],
  templateUrl: './profit-card.component.html',
  styleUrl: './profit-card.component.scss'
})
export class ProfitCardComponent {

  profit = input.required<{ price: number, isProfit: boolean }>();
  copying: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) { }

  copyToClipboard() {
    if (isPlatformBrowser(this.platformId)) {
      this.copying = true;
      navigator.clipboard.writeText(this.profit().price.toString()).then(() => {
        setTimeout(() => {
          this.copying = false;
        }, 3000);
      }, (err) => {
        console.error('Could not copy text: ', err);
      });
    }
  }
}
