import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { PinObject } from '../types/data.types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  public pinCollection: Array<PinObject> = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  public paintMarker(event) {
    const newPin: PinObject = {
      positionX: event.x,
      positionY: event.y
    };
    this.pinCollection.push(newPin);
    this.cd.markForCheck();
  }

  public clearPins() {
    this.pinCollection = [];
  }
}
