import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { PinObject, PathCoordinates, FlightPlan } from '../types/data.types';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-map-holder',
  templateUrl: './map-holder.component.html',
  styleUrls: ['./map-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapHolderComponent implements OnInit {
  public editMode = true;
  public flightPlan: FlightPlan;

  constructor(private cd: ChangeDetectorRef, private data: DataService) {
    this.flightPlan = {
      name: '',
      pins: [],
      paths: []
    };
  }

  ngOnInit() {}

  public paintMarker(event) {
    if (this.editMode) {
      const newPinPosition: PinObject = {
        x: event.x,
        y: event.y
      };
      this.flightPlan.pins.push(newPinPosition);
      this.createNewPath(newPinPosition);
      this.cd.markForCheck();
    }
  }

  public clearFlightPlan() {
    this.flightPlan = {
      name: '',
      pins: [],
      paths: []
    };
    this.editMode = true;
  }

  public saveFlightPlan() {
    const flightPlans = this.data.getFlighPlans() || [];
    const newFlightPlan: FlightPlan = {
      name: this.flightPlan.name,
      pins: this.flightPlan.pins,
      paths: this.flightPlan.paths
    };
    flightPlans.push(newFlightPlan);
    this.data.updateFlightPLans(flightPlans);
    this.editMode = false;
  }

  public onFlightPlanClick(event: FlightPlan) {
    this.clearFlightPlan();
    this.editMode = false;
    this.flightPlan = {
      name: event.name,
      pins: event.pins,
      paths: event.paths
    };
  }

  private createNewPath(newPinPosition: PinObject) {
    const pinCounter = this.flightPlan.pins.length;
    const oldPinPosition: PinObject = this.flightPlan.pins[pinCounter - 2];
    if (pinCounter > 1) {
      const newPathCoordinates: PathCoordinates = {
        startX: oldPinPosition.x,
        startY: oldPinPosition.y,
        endX: newPinPosition.x,
        endY: newPinPosition.y
      };
      this.flightPlan.paths.push(newPathCoordinates);
    }
  }
}
