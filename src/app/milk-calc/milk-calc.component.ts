import { MilkMixture } from './MilkMixtureModel';
import { ApiMilkCalcService } from './../services/api-milk-calc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milk-calc',
  templateUrl: './milk-calc.component.html',
  styleUrls: ['./milk-calc.component.css']
})
export class MilkCalcComponent implements OnInit {

  constructor(public services:ApiMilkCalcService) { }
  mm : MilkMixture;
  ngOnInit(): void {
  }
  OnSubmit()
  {

    this.services.submitForCalculation().subscribe({
      next:data=>
      {
        console.log("Milk data");
        console.log(data);
        this.mm = data;
      }
    })
  }
}
