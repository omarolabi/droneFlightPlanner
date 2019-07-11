import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinComponent } from './pin.component';

@NgModule({
  declarations: [PinComponent],
  exports: [PinComponent],
  imports: [CommonModule],
  providers: []
})
export class PinModule {}
