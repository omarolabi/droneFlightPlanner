import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() disabled: boolean;
  @Input() type: 'primary' | 'secondary';

  @Output() buttonClick: EventEmitter<void>;

  constructor() {
    this.disabled = false;
    this.type = 'primary';
    this.buttonClick = new EventEmitter();
  }

  public get buttonClass(): string {
    return `button-${this.type}`;
  }

  public onClick(): void {
    this.buttonClick.emit();
  }
}
