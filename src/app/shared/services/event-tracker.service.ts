import { Injectable } from '@angular/core';
import { EEventNames } from '../model/enums/event-names.enum';

@Injectable({
  providedIn: 'root'
})
export class EventTrackerService {

  constructor() { }

  trackEvent(event: EEventNames, data?: { [key: string]: string }[]) {
    console.log(`Event tracked: ${event}`, data);
  }
}


