import { MyhomeComponent } from './core/myhome/myhome.component';
import { CoreheadersComponent } from './core/components/coreheaders/coreheaders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
  path: '',component: MyhomeComponent } ];


@NgModule({
imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
