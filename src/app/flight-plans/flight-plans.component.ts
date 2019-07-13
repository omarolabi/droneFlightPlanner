import { Component, Output, EventEmitter } from '@angular/core';
import { FlightPlan } from '../types/data.types';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-flight-plans',
  templateUrl: './flight-plans.component.html',
  styleUrls: ['./flight-plans.component.scss']
})
export class FlightPlansComponent {
  public flightPlans: Array<FlightPlan>;

  @Output() flightPlanClick: EventEmitter<FlightPlan>;

  constructor(private data: DataService) {
    this.flightPlanClick = new EventEmitter();
    this.flightPlans = this.data.getFlighPlans() || [];
    this.data.watchStorage().subscribe(() => {
      this.flightPlans = this.data.getFlighPlans() || [];
    });
  }

  public loadFlightPlan(i: number) {
    this.flightPlanClick.emit(this.flightPlans[i]);
  }
}
