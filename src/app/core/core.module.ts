import { GalleryComponent } from './gallery/gallery.component';
import { CoreFooterComponent } from './core-footer/core-footer.component';

import { CoreRoutingModule } from './core-routing/core-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreheadersComponent } from './components/coreheaders/coreheaders.component';
import { MyhomeComponent } from './myhome/myhome.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { FormComponent } from './form/form.component';




@NgModule({
  declarations: [NavbarComponent, GalleryComponent, CoreheadersComponent,CoreFooterComponent, MyhomeComponent, AboutUsComponent, ProductsComponent, ProductComponent, ProductinfoComponent, FormComponent ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule,
    FormsModule

  ],
  exports:
    [
      NavbarComponent,
      CoreFooterComponent,
      MyhomeComponent,
     AboutUsComponent,
      GalleryComponent,
      ProductsComponent,
      ProductComponent,
      ProductinfoComponent,
      FormComponent
    ],
})
export class CoreModule { }
