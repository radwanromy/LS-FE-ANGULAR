import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockerServiceDashboardComponent } from './locker-service-dashboard/locker-service-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LockerServiceDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
