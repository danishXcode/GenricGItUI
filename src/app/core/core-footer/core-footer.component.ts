import { JsonReadServiceService } from './../../services/json-read-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyInfo } from '../ModelsClasses/UIelement';

@Component({
  selector: 'core-footer',
  templateUrl: './core-footer.component.html',
  styleUrls: ['./core-footer.component.css']
})
export class CoreFooterComponent implements OnInit,OnDestroy {

  pathCompanyInfo : string = "../assets/CompanyInfo.json";
  CompanyInfo : CompanyInfo = new CompanyInfo();
  JsonReadSubscriptionCompanyInfo : Subscription;
  constructor(private JsonReadServiceService : JsonReadServiceService) { }

  ngOnInit(): void {

    this.JsonReadSubscriptionCompanyInfo = this.JsonReadServiceService.getJSON(this.pathCompanyInfo).subscribe(data => {
      this.CompanyInfo=data.Companyinfo;
      
    });
  }
  
  ngOnDestroy()
  {
    this.JsonReadSubscriptionCompanyInfo.unsubscribe();
  }

}
