import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { PinObject, PathCoordinates, FlightPlan } from '../types/data.types';

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

  constructor(private cd: ChangeDetectorRef) {}

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
    this.pinPositions = [];
    this.pathCoordinates = [];
  }

  public saveFlightPlan() {
    console.log(this.pinPositions, this.pathCoordinates);
  }

  public newFlightPlan() {
    this.clearFlightPlan();
    this.editMode = true;
  }

  public onFlightPlanClick(event: FlightPlan) {
    this.editMode = false;
    this.clearFlightPlan();
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
