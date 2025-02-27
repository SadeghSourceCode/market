import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketPriceChange'
})
export class MarketPriceChangePipe implements PipeTransform {

  constructor(
    private _decimalPipe: DecimalPipe
  ) { }

  transform(change: number | undefined): { positive: boolean, value: string | null } | null {
    if (change) {
      if (Math.sign(change) === -1) {
        return {
          positive: false,
          value: this._decimalPipe.transform(Math.abs(change), '1.0-2')
        }
      }
      else {
        return {
          positive: true,
          value: this._decimalPipe.transform(Math.abs(change), '1.0-2')
        }
      }
    }

    return null;
  }

}
