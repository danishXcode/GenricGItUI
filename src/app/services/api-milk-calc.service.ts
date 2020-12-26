import { Observable } from 'rxjs';
import { MilkMixture } from './../milk-calc/MilkMixtureModel';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIconstantsService } from '../IMS/apiconstants.service';

@Injectable({
  providedIn: 'root'
})
export class ApiMilkCalcService {

  private URlForLambda = "https://8jpvre0ct8.execute-api.ap-south-1.amazonaws.com/Prod/api/Values/Apost";
  constructor(private http: HttpClient,private fb : 
    FormBuilder,_APIconstantsService:APIconstantsService) {

    }

    MilkCalcForm = this.fb.group({
      currentMilkFat : [''],
      expectedMilkFat : [''],
      totalMilk : [''],
      pricePerltr : [''],
     transportationCost : [''],
      });

    submitForCalculation() : Observable<MilkMixture>  
    {
      var body = {
        currentMilkFat : parseFloat(this.MilkCalcForm.value.currentMilkFat),
        expectedMilkFat : parseFloat(this.MilkCalcForm.value.expectedMilkFat),
        totalMilk :parseFloat( this.MilkCalcForm.value.totalMilk),
        pricePerltr :parseFloat( this.MilkCalcForm.value.pricePerltr),
        transportationCost :parseFloat(this.MilkCalcForm.value.transportationCost)
      };
      console.log(body);
      const data =  JSON.stringify(body);  
      const headers =  {
        headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
      };
    return this.http.post<any>(this.URlForLambda, data,headers);
    }

}
