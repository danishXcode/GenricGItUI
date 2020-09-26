import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UMCConstantsService {
  public readonly Url ="https://localhost:44352/user/";
  public readonly LoginUrl ="login";
  public readonly RegisterURl = "RegisterTenant";
  public readonly DeletePOOrderItemURL ="DeletePOI";
  constructor() { }
}
