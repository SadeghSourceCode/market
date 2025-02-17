import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IMarket } from '../../shared/model/interfaces';
import { CALCULATE_PAGE } from '../../shared/constants';
import { CoinEckoService } from '../../shared/services/coin-ecko.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MarketCardComponent } from "../../shared/components/market-card/market-card.component";

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TranslateModule,
    MarketCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent implements OnInit {
  markets: IMarket[] = [];
  currency: string = 'usd';
  loading: boolean = true;

  constructor(
    private _router: Router,
    private _coinEckoService: CoinEckoService
  ) { }

  ngOnInit(): void {
    this._coinEckoService.getMarkets(this.currency, true)
      .subscribe(res => {
        this.markets = res;
        this.markets.forEach(market => {
          if (market.sparkline_in_7d) {
            market.sparkline_in_7d.price = market.sparkline_in_7d?.price?.slice(0, 10);
          }
        });
        this.loading = false;
      });
  }

  headerButtonClicked(id: string) {
    if (id === 'HEADER_CALCULATE') {
      this._router.navigate([CALCULATE_PAGE]);
    }
  }
}
