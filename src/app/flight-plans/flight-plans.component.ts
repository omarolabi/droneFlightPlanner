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
    this.flightPlans = [
      {
        pins: [{ x: 157, y: 139 }, { x: 278, y: 184 }, { x: 223, y: 277 }],
        paths: [
          { startX: 157, startY: 139, endX: 278, endY: 184 },
          { startX: 278, startY: 184, endX: 223, endY: 277 }
        ]
      },
      {
        pins: [{ x: 367, y: 38 }, { x: 458, y: 88 }, { x: 473, y: 150 }],
        paths: [
          { startX: 367, startY: 38, endX: 458, endY: 88 },
          { startX: 458, startY: 88, endX: 473, endY: 150 }
        ]
      }
    ];
  }

  loadFlightPlan(i: number) {
    this.flightPlanClick.emit(this.flightPlans[i]);
  }
}
