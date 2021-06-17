import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReorderableListModule } from './shared/components/reorderable-list/reorderable-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReorderableListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
