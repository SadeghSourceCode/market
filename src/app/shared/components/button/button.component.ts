import { Component, input, output } from '@angular/core';
import { EventTrackerService } from '../../services/event-tracker.service';
import { EEventNames } from '../../model/enums/event-names.enum';
import { IButton } from '../../model/interfaces/button.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  item = input.required<IButton>();

  clickHandler = output<string>();

  constructor(
    private _eventTrackerService: EventTrackerService,
  ) { }

  onClick() {
    this._eventTrackerService.trackEvent(EEventNames.buttonClick, [{ 'id': this.item().id }]);
    this.clickHandler.emit(this.item().id);
  }
}
