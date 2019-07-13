import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { PinObject, PathCoordinates, FlightPlan } from '../types/data.types';
import { DataService } from '../services/data.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-map-holder',
  templateUrl: './map-holder.component.html',
  styleUrls: ['./map-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapHolderComponent implements OnInit {
  public pinPositions: Array<PinObject> = [];
  public pathCoordinates: Array<PathCoordinates> = [];
  public editMode = true;
  public flightPlanName = '';

  constructor(private cd: ChangeDetectorRef, private data: DataService) {}

  ngOnInit() {}

  public paintMarker(event) {
    if (this.editMode) {
      const newPinPosition: PinObject = {
        x: event.x,
        y: event.y
      };
      this.pinPositions.push(newPinPosition);
      this.createNewPath(newPinPosition);
      this.cd.markForCheck();
    }
  }

  public clearFlightPlan() {
    this.flightPlanName = '';
    this.pinPositions = [];
    this.pathCoordinates = [];
    this.editMode = true;
  }

  public saveFlightPlan() {
    const localStorageData = this.data.getFlighPlans() || [];
    const newFlightPlan: FlightPlan = {
      name: this.flightPlanName,
      pins: this.pinPositions,
      paths: this.pathCoordinates
    };
    localStorageData.push(newFlightPlan);
    this.data.postFlightPLans(localStorageData);
    this.editMode = false;
  }

  public onFlightPlanClick(event: FlightPlan) {
    this.clearFlightPlan();
    this.editMode = false;
    this.flightPlanName = event.name;
    this.pinPositions = event.pins;
    this.pathCoordinates = event.paths;
  }

  private createNewPath(newPinPosition: PinObject) {
    const pinCounter: number = this.pinPositions.length;
    const oldPinPosition: PinObject = this.pinPositions[pinCounter - 2];
    if (pinCounter > 1) {
      const newPathCoordinates: PathCoordinates = {
        startX: oldPinPosition.x,
        startY: oldPinPosition.y,
        endX: newPinPosition.x,
        endY: newPinPosition.y
      };
      this.pathCoordinates.push(newPathCoordinates);
    }
  }
}
