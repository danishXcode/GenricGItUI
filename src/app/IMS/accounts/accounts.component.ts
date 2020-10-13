import { AddFundDialogueComponent } from '../add-fund-dialogue/add-fund-dialogue.component';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  matdialog:MatDialog;
  matDialogConfig:MatDialogConfig;
  constructor(_matdialog:MatDialog) { 
  this.matdialog= _matdialog;  
  }

  ngOnInit(): void {
  }
  AddFundDialogue()
  {
    const dilog = new MatDialogConfig();
    dilog.disableClose = true;
    dilog.autoFocus = true;
    dilog.width="60%";

    this.matdialog.open(AddFundDialogueComponent,dilog);
  }
}
