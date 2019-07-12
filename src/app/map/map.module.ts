import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { PinModule } from '../pin/pin.module';
import { PathModule } from '../path/path.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [CommonModule, PinModule, PathModule, ButtonModule],
  providers: []
})
export class MapModule {}
