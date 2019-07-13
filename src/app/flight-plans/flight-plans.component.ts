import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightPlan } from '../types/data.types';

@Component({
  selector: 'app-flight-plans',
  templateUrl: './flight-plans.component.html',
  styleUrls: ['./flight-plans.component.scss']
})
export class FlightPlansComponent implements OnInit {
  public flightPlans: Array<FlightPlan>;

  @Output() flightPlanClick: EventEmitter<FlightPlan>;

  constructor() {
    this.flightPlanClick = new EventEmitter();
  }

  ngOnInit() {
    this.flightPlans = JSON.parse(localStorage.getItem('flightPlans')) || [];
  }

  public loadFlightPlan(i: number) {
    this.flightPlanClick.emit(this.flightPlans[i]);
  }
}
