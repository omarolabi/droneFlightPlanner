import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { PinModule } from '../pin/pin.module';
import { PathModule } from '../path/path.module';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [CommonModule, PinModule, PathModule],
  providers: []
})
export class MapModule {}
