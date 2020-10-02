import { IMSApiCallService } from './../services/imsapi-call.service';
import { Component, OnInit } from '@angular/core';
import { DashBoardData } from '../Models/DashBoardData';
import { nextTick } from 'process';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private IMSApiCallService : IMSApiCallService) { }
  dashBoardData :DashBoardData ;
  ngOnInit(): void {
    this.IMSApiCallService.GetDashBoard().subscribe({
      next :data=>
      {
       console.log("dashboardta")
        console.log(data);
        this.dashBoardData = data;
      }
    });
  }

}
