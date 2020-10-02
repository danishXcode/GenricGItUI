import { IMSApiCallService } from './IMS/services/imsapi-call.service';
import { MaterialModule } from './material/material.module';
import { PurchaseOrderComponent } from './IMS/purchase-order/purchase-order.component';

import { UMCServicesService } from './UMC/umcservices.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './UMC/login/login.component';
import { RegisterComponent } from './UMC/register/register.component';
import { JwtInterceptor } from './UMC/JwtInterceptor';
import { GetdataComponent } from './UMC/getdata/getdata.component';
import { PurchaseOrdersComponent } from './IMS/purchase-orders/purchase-orders.component';
import { isMainThread } from 'worker_threads';
import { ProductstableComponent } from './productstable/productstable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PurchaseOrderItmesComponent } from './IMS/purchase-order-itmes/purchase-order-itmes.component';
import { DashBoardComponent } from './IMS/dash-board/dash-board.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GetdataComponent,
    PurchaseOrderComponent,
    PurchaseOrdersComponent,
    ProductstableComponent,
    PurchaseOrderItmesComponent,
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    FormsModule ,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [UMCServicesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },IMSApiCallService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
