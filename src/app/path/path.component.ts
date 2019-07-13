import { Component, Input } from '@angular/core';
import { PathCoordinates } from '../types/data.types';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent {
  @Input() coordinates: PathCoordinates;
}
