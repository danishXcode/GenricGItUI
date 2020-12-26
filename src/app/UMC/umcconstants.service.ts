import { stringify } from 'querystring';
import { JsonReadServiceService } from './../services/json-read-service.service';
import { Injectable } from '@angular/core';
import { APIPaths } from '../core/ModelsClasses/APIPaths';

@Injectable({
  providedIn: 'root'
})
export class UMCConstantsService {
//public readonly Url ="https://localhost:44352/user/";
 
   public readonly Url = "http://ec2-13-235-81-46.ap-south-1.compute.amazonaws.com:8080/user/"  ;
 public readonly LoginUrl ="login";
  public readonly RegisterURl = "RegisterTenant";
  public readonly RegisterUserURl = "RegisterUser";
  public readonly DeletePOOrderItemURL ="DeletePOI";
  public readonly GetAllUserDetailsURL="GetAllUsers/";
  pathCompanyInfo :string = "../assets/APIServices.json";
  apipaths:APIPaths[];
  constructor() 
  {
     
  }
}
