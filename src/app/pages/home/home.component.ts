import { Router } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IMarket } from '../../shared/model/interfaces';
import { CALCULATE_PAGE } from '../../shared/constants';
import { CoinEckoService } from '../../shared/services/coin-ecko.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MarketCardComponent } from "../../shared/components/market-card/market-card.component";
import { MarketSparklinePipe } from '../../shared/pipes/market-sparkline.pipe';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TranslateModule,
    MarketCardComponent,
    MarketSparklinePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent implements OnInit {
  markets = signal<IMarket[]>([]);
  currency: string = 'usd';
  loading: boolean = true;

  constructor(
    private _router: Router,
    private _coinEckoService: CoinEckoService
  ) { }

  ngOnInit(): void {
    this._coinEckoService.getMarkets(this.currency, true)
      .subscribe(res => {
        this.markets.set(res);
        this.loading = false;
      });
  }

  headerButtonClicked(id: string) {
    if (id === 'HEADER_CALCULATE') {
      this._router.navigate([CALCULATE_PAGE]);
    }
  }
}
