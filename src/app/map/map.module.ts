import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6N6kbJZRlp7_GCYCwS1xsreRjcbY1Qus',
      libraries: ['places']
    })
  ],
  providers: []
})
export class MapModule {}
