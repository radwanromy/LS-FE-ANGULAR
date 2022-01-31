import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockerServiceDashboardComponent } from './locker-service-dashboard/locker-service-dashboard.component';
import { TestComponent } from './test/test.component';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LockerServiceDashboardComponent,
    TestComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule , 
    Ng2OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
