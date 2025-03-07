import { Injectable } from '@angular/core';
import { IButton } from '../model/interfaces/base';

@Injectable({
  providedIn: 'root'
})
export class HeaderActionButtonsService {

  constructor() { }

  generateButtons(backButton: boolean | undefined): IButton | null {
    if (!backButton) return null;

    return this._backButton();
  }

  private _backButton(): IButton {
    const result: IButton = {
      id: "HEADER_BACK",
      type: "icon-only",
      icon: {
        name: "arrow-right",
        position: "right"
      },
      isDisabled: false,
      isLoading: false,
      isVisible: true
    }; 

    return result;
  }
}

