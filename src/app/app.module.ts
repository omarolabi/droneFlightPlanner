import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapHolderModule } from './map-holder/map-holder.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MapHolderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
