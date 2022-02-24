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
import { NgxPaginationModule } from 'ngx-pagination';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { NgToastModule } from 'ng-angular-popup';

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
    Ng2OrderModule, 
    MatFormFieldModule,
    NgxPaginationModule,
    NgToastModule

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
