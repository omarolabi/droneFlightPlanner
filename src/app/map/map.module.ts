import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [CommonModule],
  providers: []
})
export class MapModule {}
