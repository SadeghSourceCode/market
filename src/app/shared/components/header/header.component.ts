import { ButtonComponent } from '../button/button.component';
import { isPlatformBrowser, Location } from '@angular/common';
import { IButton } from '../../model/interfaces/button.interface';
import { Component, Inject, input, OnChanges, OnInit, output, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { HeaderActionButtonsService } from '../../services/header-action-buttons.service';

@Component({
  selector: 'app-header',
  imports: [
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnChanges {
  back = input<boolean>();
  title = input.required<string>();
  actionButton: IButton | null = {} as IButton;

  actionButtonClicked = output<string>();

  constructor(
    private _location: Location,
    @Inject(PLATFORM_ID) private platformId: object,
    private _headerActionButtonsService: HeaderActionButtonsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.actionButton = this._headerActionButtonsService.generateButtons(this.back());
  }

  ngOnInit(): void {
  }

  clickHandler(id: string) {
    if (id === "HEADER_BACK" && isPlatformBrowser(this.platformId)) {
      this._location.back();
    }
    else {
      this.actionButtonClicked.emit(id);
    }
  }

}
