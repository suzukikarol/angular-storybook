import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleButtonModule } from '../../projects/storybook-ui/src/lib/simple-button//simple-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
