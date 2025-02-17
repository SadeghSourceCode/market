import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, input, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-price-chart',
  imports: [
    CommonModule,

  ],
  templateUrl: './price-chart.component.html',
  styleUrl: './price-chart.component.scss',
})
export class PriceChartComponent implements AfterViewInit {
  @ViewChild('priceChartCanvas', { static: false }) private priceChartCanvas!: ElementRef;
  private ctx!: CanvasRenderingContext2D;

  prices = input.required<number[]>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ctx = this.priceChartCanvas.nativeElement.getContext('2d');
      this.drawPriceChart(this.prices());
    }
  }

  drawPriceChart(prices: number[]) {
    if (!this.ctx) return;

    const canvas = this.priceChartCanvas.nativeElement;
    const width = canvas.width;
    const height = canvas.height;

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;

    this.ctx.clearRect(0, 0, width, height);

    this.ctx.beginPath();
    this.ctx.lineWidth = 6;

    for (let i = 0; i < prices.length; i++) {
      const x = (i / (prices.length - 1)) * width;
      const y = height - ((prices[i] - minPrice) / priceRange) * height;

      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        const color = prices[i] > prices[i - 1] ? '#00c951' : '#fb2c36';
        this.ctx.strokeStyle = color;
        this.ctx.lineTo(x, y);
      }
    }

    this.ctx.stroke();
  }
}
