import { FormComponent } from './../form/form.component';
import { ProductsComponent } from './../products/products.component';
import { AboutUsComponent } from './../about-us/about-us.component';
import { GalleryComponent } from './../gallery/gallery.component';
import { CoreheadersComponent } from './../components/coreheaders/coreheaders.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';



const routes: Routes = [ {
  path: 'core', children: [
    { path: 'gallery', component: GalleryComponent },
    { path: 'header', component: CoreheadersComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product/:Pid', component: ProductComponent },
    { path: 'form', component: FormComponent }
  ]
},];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CoreRoutingModule { }
