import { UMCServicesService } from './../umcservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  constructor(public service:UMCServicesService) { }
  public data:any;
  ngOnInit(): void {
    this.service.GetData();
  }

  Logout(){
    this.service.logout();
  }
}
