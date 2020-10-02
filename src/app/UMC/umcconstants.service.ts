import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UMCConstantsService {
 public readonly Url ="https://localhost:44352/user/";
 
  //public readonly Url = "https://ec2-13-235-81-46.ap-south-1.compute.amazonaws.com/user/"
 public readonly LoginUrl ="login";
  public readonly RegisterURl = "RegisterTenant";
  public readonly DeletePOOrderItemURL ="DeletePOI";
  constructor() { }
}
