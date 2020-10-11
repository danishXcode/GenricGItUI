import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import * as Material from '@angular/material/';
import {MatInputModule} from '@angular/material/input'

import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
   
  ],
  exports:[
    MatToolbarModule,
    MatGridListModule,
     MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
   
  ],
})
export class MaterialModule { }
