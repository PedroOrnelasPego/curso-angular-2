import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
