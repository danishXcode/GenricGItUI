import { Product } from './../ModelsClasses/Product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'core-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  @Input()product:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
