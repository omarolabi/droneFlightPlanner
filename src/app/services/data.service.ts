import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FlightPlan } from '../types/data.types';

@Injectable()
export class DataService {
  private storageSub = new Subject();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  public getFlighPlans(): Array<FlightPlan> {
    return JSON.parse(localStorage.getItem('flightPlans'));
  }

  public updateFlightPLans(data): void {
    localStorage.setItem('flightPlans', JSON.stringify(data));
    this.storageSub.next();
  }
}
