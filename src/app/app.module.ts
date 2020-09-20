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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GetdataComponent,
    PurchaseOrderComponent,
    PurchaseOrdersComponent,
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
    ReactiveFormsModule
  ],
  providers: [UMCServicesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
