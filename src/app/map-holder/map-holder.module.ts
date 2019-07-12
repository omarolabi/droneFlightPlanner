import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapHolderComponent } from './map-holder.component';
import { PinModule } from '../pin/pin.module';
import { PathModule } from '../path/path.module';
import { ButtonModule } from '../button/button.module';
import { FlightPlansModule } from '../flight-plans/flight-plans.module';

@NgModule({
  declarations: [MapHolderComponent],
  exports: [MapHolderComponent],
  imports: [
    CommonModule,
    PinModule,
    PathModule,
    ButtonModule,
    FlightPlansModule
  ],
  providers: []
})
export class MapHolderModule {}
