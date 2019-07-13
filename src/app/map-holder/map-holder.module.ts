import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapHolderComponent } from './map-holder.component';
import { PinModule } from '../pin/pin.module';
import { PathModule } from '../path/path.module';
import { FlightPlansModule } from '../flight-plans/flight-plans.module';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [MapHolderComponent],
  exports: [MapHolderComponent],
  imports: [
    CommonModule,
    PinModule,
    PathModule,
    FlightPlansModule,
    FormsModule
  ],
  providers: [DataService]
})
export class MapHolderModule {}
