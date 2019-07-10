import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PinComponent implements OnInit {
  @Input() positionX: number;
  @Input() positionY: number;

  public pinPosition = {};

  constructor() {}

  ngOnInit() {
    this.pinPosition = {
      'top.px': this.positionY,
      'left.px': this.positionX
    };
  }
}
