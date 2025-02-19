import { Pipe, PipeTransform } from '@angular/core';
import { IMarket } from '../model/interfaces';

@Pipe({
  name: 'marketSparkline'
})
export class MarketSparklinePipe implements PipeTransform {

  transform(markets: IMarket[], sparklineCount:number): IMarket[] {
    markets.forEach(market => {
      if (market.sparkline_in_7d) {
        market.sparkline_in_7d.price = market.sparkline_in_7d?.price?.slice(0, sparklineCount);
      }
    });

    return markets;
  }

}
