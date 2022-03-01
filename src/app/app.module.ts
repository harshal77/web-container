import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

/** 
 * CUSTOM_ELEMENTS_SCHEMA =>  Defines a schema that allows an NgModule to contain the following:
 * 1) Non-Angular elements named with dash case (-).
 * 2) Element properties named with dash case (-). Dash case is the naming convention for custom elements.
 */
