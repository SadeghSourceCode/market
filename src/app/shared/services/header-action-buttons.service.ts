import { Injectable } from '@angular/core';
import { IButton } from '../model/interfaces/button.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderActionButtonsService {

  constructor() { }

  generateButtons(backButton: boolean | undefined): IButton | null {
    if (!backButton) return this._calculateButton();

    return this._backButton();
  }

  private _backButton(): IButton {
    const result: IButton = {
      id: "HEADER_BACK",
      type: "icon-only",
      icon: {
        name: "arrow-left",
        position: "right"
      },
      isDisabled: false,
      isLoading: false,
      isVisible: true
    }; 

    return result;
  }

  private _calculateButton() : IButton {
    const result: IButton = {
      id: "HEADER_CALCULATE",
      type: "text",
      label: "محاسبه",
      icon: {
        name: "calculator",
        position: "left"
      },
      isDisabled: false,
      isLoading: false,
      isVisible: true
    };

    return result;
  }
}

