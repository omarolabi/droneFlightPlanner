import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightPlansComponent } from './flight-plans.component';

@NgModule({
  declarations: [FlightPlansComponent],
  exports: [FlightPlansComponent],
  imports: [CommonModule],
  providers: []
})
export class FlightPlansModule {}
