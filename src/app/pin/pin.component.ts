import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { PinObject } from '../types/data.types';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PinComponent implements OnInit {
  @Input() position: PinObject;

  public styles = {};

  constructor() {}

  ngOnInit() {
    this.styles = {
      'left.px': this.position.x,
      'top.px': this.position.y
    };
  }
}
