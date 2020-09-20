import { FormService } from './../../services/apicall/form.service';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms'
import { MailModel } from 'src/app/services/serviceModels/MailModel';
import { stringify } from 'querystring';

@Component({
  selector: 'core-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _formService:FormService) { }

  ngOnInit(): void {
  }

  Register(regForm:NgForm){  
    console.log(regForm.form.controls);  
    var info = regForm.form.controls;
    var mailM = new MailModel();

    var mailids=info.toMail.value.split(",")

    mailids.forEach(element => {
      
    });

    mailM.ToMail =mailids;
    mailM.UsernameMail=info.fromMail.value;
    mailM.CCMail=info.ccmail.value;
    mailM.Body=info.Body.value;
    mailM.Subject=info.subject.value;
    mailM.Password = info.PassWord.value;
    this._formService.SendRequestMail(mailM);
  }  

}
