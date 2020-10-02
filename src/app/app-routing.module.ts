import { DashBoardComponent } from './IMS/dash-board/dash-board.component';
import { PurchaseOrdersComponent } from './IMS/purchase-orders/purchase-orders.component';
import { PurchaseOrderComponent } from './IMS/purchase-order/purchase-order.component';
import { GetdataComponent } from './UMC/getdata/getdata.component';
import { LoginComponent } from './UMC/login/login.component';
import { RegisterComponent } from './UMC/register/register.component';
import { MyhomeComponent } from './core/myhome/myhome.component';
import { CoreheadersComponent } from './core/components/coreheaders/coreheaders.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path: '',component: MyhomeComponent } ,
  {path : 'Register',component : RegisterComponent},
  {path : 'Login',component : LoginComponent},
  {path : 'getdata',component : GetdataComponent},
  {path : 'PurchaseOrders',component : PurchaseOrdersComponent},
  {path : 'PurchaseOrder/:POName',component : PurchaseOrderComponent},
  {path : 'DashBoard',component :DashBoardComponent }
]

@NgModule({
imports:[RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
