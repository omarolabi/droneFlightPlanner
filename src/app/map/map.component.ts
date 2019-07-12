import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { PinObject, PathCoordinates } from '../types/data.types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  public pinPositions: Array<PinObject> = [];
  public pathCoordinates: Array<PathCoordinates> = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  public paintMarker(event) {
    const newPinPosition: PinObject = {
      x: event.x,
      y: event.y
    };
    this.pinPositions.push(newPinPosition);
    this.createNewPath(newPinPosition);
    this.cd.markForCheck();
  }

  public clearFlightPlan() {
    this.pinPositions = [];
    this.pathCoordinates = [];
  }

  public saveFlightPlan() {
    console.log('guardar');
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
