import { Pipe, PipeTransform } from '@angular/core';
import { IPriceChange } from '../model/interfaces/price-change.interface';

@Pipe({
  name: 'priceChangePercentage',
  standalone: true
})
export class PriceChangePercentagePipe implements PipeTransform {
  /**
   * Transforms the input to calculate the percentage change between two prices.
   * @param highPrice - The higher price value (new value).
   * @param lowPrice - The lower price value (old value).
   * @returns A string representing the percentage change (e.g., '+25%', '-10%').
   */
  transform(highPrice: number | undefined, lowPrice: number | undefined): IPriceChange {
    let result: IPriceChange;

    let percentageChange = 0;
    if (highPrice !== undefined && lowPrice !== undefined) {
      percentageChange = ((highPrice - lowPrice) / lowPrice) * 100;
    }
    else {
      result = {
        isNeutral: true,
        percentage: '0%'
      };
    }

    if (percentageChange > 0) {
      result = {
        isPositive: true,
        percentage: `${percentageChange.toFixed(2)}%`
      }
    }
    else if (percentageChange < 0) {
      result = {
        isNegative: true,
        percentage: `${percentageChange.toFixed(2)}%`
      }
    }
    else {
      result = {
        isNeutral: true,
        percentage: `0%`
      }
    }
    return result;
  }
}
