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
  {path : 'getdata',component : GetdataComponent}
]

@NgModule({
imports:[RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
