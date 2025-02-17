import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { MARKETS_API, PRICE_API } from '../constants/apis';
import { IMarket } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoinEckoService {

  constructor(
    private http: HttpClient
  ) { }

  getPrice(id: string, currency: string = 'usd'): Observable<{ [key: string]: { [key: string]: number } }> {
    return this.http.get<{ [key: string]: { [key: string]: number } }>(PRICE_API + `?ids=${id}&vs_currencies=${currency}`)
      .pipe(
        catchError(e => {
          return of(e)
        })
      );
  }

  getMarkets(currency: string = 'usd', sparkline: boolean = false, page: number = 1): Observable<IMarket[]> {
    const result: IMarket[] = [
      {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
        "current_price": 1.0,
        "market_cap": 141184057767,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 141184057767,
        "total_volume": 59540925995,
        "high_24h": 1.0,
        "low_24h": 1.0,
        "price_change_24h": 5.15e-06,
        "price_change_percentage_24h": 0.00052,
        "market_cap_change_24h": 688874496,
        "market_cap_change_percentage_24h": 0.49032,
        "circulating_supply": 141166869194.8698,
        "total_supply": 141166869194.8698,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.40557,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.69864,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2025-02-06T19:58:56.918Z",
        "sparkline_in_7d": {
          "price": [
            0.9999905136594186,
            1.0001070708551734,
            1.0000414908178115,
            1.000192083599465,
            1.0001088439846098,
            1.0001196908309935,
            1.000097883254083,
            1.000038608453777,
            1.0000397655239979,
            1.0000481563009116,
            0.9999406691598911,
          ]
        }
      },
      {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
        "current_price": 1.0,
        "market_cap": 141184057767,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 141184057767,
        "total_volume": 59540925995,
        "high_24h": 1.0,
        "low_24h": 1.0,
        "price_change_24h": 5.15e-06,
        "price_change_percentage_24h": 0.00052,
        "market_cap_change_24h": 688874496,
        "market_cap_change_percentage_24h": 0.49032,
        "circulating_supply": 141166869194.8698,
        "total_supply": 141166869194.8698,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.40557,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.69864,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2025-02-06T19:58:56.918Z",
        "sparkline_in_7d": {
          "price": [
            0.9999905136594186,
            1.0001070708551734,
            1.0000414908178115,
            1.000192083599465,
            1.0001088439846098,
            1.0001196908309935,
            1.000097883254083,
            1.000038608453777,
            1.0000397655239979,
            1.0000481563009116,
            0.9999406691598911,
          ]
        }
      },
      {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
        "current_price": 1.0,
        "market_cap": 141184057767,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 141184057767,
        "total_volume": 59540925995,
        "high_24h": 1.0,
        "low_24h": 1.0,
        "price_change_24h": 5.15e-06,
        "price_change_percentage_24h": 0.00052,
        "market_cap_change_24h": 688874496,
        "market_cap_change_percentage_24h": 0.49032,
        "circulating_supply": 141166869194.8698,
        "total_supply": 141166869194.8698,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.40557,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.69864,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2025-02-06T19:58:56.918Z",
        "sparkline_in_7d": {
          "price": [
            0.9999905136594186,
            1.0001070708551734,
            1.0000414908178115,
            1.000192083599465,
            1.0001088439846098,
            1.0001196908309935,
            1.000097883254083,
            1.000038608453777,
            1.0000397655239979,
            1.0000481563009116,
            0.9999406691598911,
          ]
        }
      },
      {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
        "current_price": 1.0,
        "market_cap": 141184057767,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 141184057767,
        "total_volume": 59540925995,
        "high_24h": 1.0,
        "low_24h": 1.0,
        "price_change_24h": 5.15e-06,
        "price_change_percentage_24h": 0.00052,
        "market_cap_change_24h": 688874496,
        "market_cap_change_percentage_24h": 0.49032,
        "circulating_supply": 141166869194.8698,
        "total_supply": 141166869194.8698,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.40557,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.69864,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2025-02-06T19:58:56.918Z",
        "sparkline_in_7d": {
          "price": [
            0.9999905136594186,
            1.0001070708551734,
            1.0000414908178115,
            1.000192083599465,
            1.0001088439846098,
            1.0001196908309935,
            1.000097883254083,
            1.000038608453777,
            1.0000397655239979,
            1.0000481563009116,
            0.9999406691598911,
          ]
        }
      },
    ]

    return of(result)
    // return this.http.get<IMarket[]>(MARKETS_API + `?vs_currency=${currency}&order=market_cap_desc&per_page=5&page=${page}&sparkline=${sparkline}`)
    //   .pipe(
    //     catchError(e => {
    //       return of(e)
    //     })
    //   );
  }
}