import { element } from 'protractor';
import { UIElements,CompanyInfo } from './../ModelsClasses/UIelement';
import { JsonReadServiceService } from './../../services/json-read-service.service';
import { Component, OnInit, OnDestroy, } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Subscription } from 'rxjs';



@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnDestroy{


  UIElements : UIElements[];
  CompanyInfo  : CompanyInfo;
  
  JsonReadSubscription : Subscription;

  JsonReadSubscriptionCompanyInfo : Subscription;

  path :string = "../assets/UIConfiguration.json";
  
  pathCompanyInfo :string = "../assets/CompanyInfo.json";

  constructor(private JsonReadServiceService : JsonReadServiceService) { }


  ngOnInit(): void {
   this.JsonReadSubscription = this.JsonReadServiceService.getJSON(this.path).subscribe(data => {
      this.UIElements=data.elements;
    //   let tempinof =this.UIElements.filter(p=>p.elementName == "CompanyInfo")[0];

    // this.CompanyInfo.ComapanyName=tempinof.settings.title;

  });

  this.JsonReadSubscriptionCompanyInfo = this.JsonReadServiceService.getJSON(this.pathCompanyInfo).subscribe(data => {
    this.CompanyInfo=data.Companyinfo;
    console.log(this.CompanyInfo);
  });


  }

  ngOnDestroy()
  {
    console.log("Distroy calals NavbarComponent");
    this.JsonReadSubscription.unsubscribe();
    this.JsonReadSubscriptionCompanyInfo.unsubscribe();
  }

}
