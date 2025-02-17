import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculate-profit';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fa']);
    this.translate.setDefaultLang('fa');
    this.translate.use('fa');
  }
}
