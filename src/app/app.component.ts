import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from "./shared/components/button/button.component";
import { CALCULATE_PAGE, USER_PROFILE_PAGE, USER_SETTINGS_PAGE } from './shared/constants';
import { IButton } from './shared/model/interfaces/base';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  footerButtons: IButton[] = [
    {
      id: "FOOTER_SETTINGS",
      type: "icon-only",
      icon: {
        name: "settings",
      },
    },
    {
      id: "FOOTER_PROFILE",
      type: "icon-only",
      icon: {
        name: "user"
      },
    },
    {
      id: "FOOTER_CALCULATOR",
      type: "icon-only",
      icon: {
        name: "calculator"
      }
    },
    {
      id: "FOOTER_HOME",
      type: "icon-only",
      icon: {
        name: "home"
      }
    }
  ];

  activeFooter: string = '';

  constructor(
    private _router: Router,
    private _translate: TranslateService,
  ) {
    this._translate.addLangs(['fa']);
    this._translate.setDefaultLang('fa');
    this._translate.use('fa');
  }

  ngOnInit(): void {

    this._router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        switch (route.url) {
          case '/':
            this.activeFooter = "FOOTER_HOME"
            break;
          case '/calculate':
            this.activeFooter = "FOOTER_CALCULATOR"
            break;
          case '/user-profile':
            this.activeFooter = "FOOTER_PROFILE"
            break;
          case '/user-settings':
            this.activeFooter = "FOOTER_SETTINGS"
            break;
          default:
            this.activeFooter = "FOOTER_HOME"
            break;
        }
      }

    });
  }

  footerClickHandler(id: string) {
    switch (id) {
      case "FOOTER_CALCULATOR":
        this._router.navigate([CALCULATE_PAGE]);
        break;
      case "FOOTER_HOME":
        this._router.navigate(['/']);
        break;
      case "FOOTER_PROFILE":
        this._router.navigate([USER_PROFILE_PAGE]);
        break;
      case "FOOTER_SETTINGS":
        this._router.navigate([USER_SETTINGS_PAGE]);
        break;
    }
  }

}
