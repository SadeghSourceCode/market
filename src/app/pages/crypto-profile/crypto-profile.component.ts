import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CoinEckoService } from '../../shared/services/coin-ecko.service';
import { ICoinDetail } from '../../shared/model/interfaces';

@Component({
  selector: 'app-crypto-profile',
  imports: [HeaderComponent],
  templateUrl: './crypto-profile.component.html',
  styleUrl: './crypto-profile.component.scss'
})
export class CryptoProfileComponent implements OnInit {
  cryptoId: any;
  coinDetail: ICoinDetail = {} as ICoinDetail;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _coinEckoService: CoinEckoService,
  ) {

  }

  ngOnInit(): void {
    this.cryptoId = this._activatedRoute.snapshot.params['id'];

    this._coinEckoService.getCoinDetail(this.cryptoId)
    .subscribe(res => {
      if(res){
        this.coinDetail = res;
      }
    });

  }

  onBackHandler() {
    this._router.navigate(['/']);
  }
}
