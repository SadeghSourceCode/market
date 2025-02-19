import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from "./shared/components/button/button.component";
import { IButton } from './shared/model/interfaces';
import { CALCULATE_PAGE } from './shared/constants';

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
        console.log("ROUTE ==> ", route.url);
        switch (route.url) {
          case '/':
            this.activeFooter = "FOOTER_HOME"
            break;
          case '/calculate':
            this.activeFooter = "FOOTER_CALCULATOR"
            break;
          // case '/':
          //   this.activeFooter = "FOOTER_HOME"
          //   break;
        }
      }
      
    });
  }

  footerClickHandler(id: string) {
    this.activeFooter = id;

    switch (id) {
      case "FOOTER_CALCULATOR":
        this._router.navigate([CALCULATE_PAGE]);
        break;
      case "FOOTER_HOME":
        this._router.navigate(['/']);
        break;

      default:
        break;
    }
  }

}
