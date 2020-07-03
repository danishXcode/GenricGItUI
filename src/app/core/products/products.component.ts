import { Products } from './../ModelsClasses/Product';
import { JsonReadServiceService } from './../../services/json-read-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product/product-service.service';

@Component({
  selector: 'core-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  path :string = "../assets/Data/products.json";
  JsonReadSubscription : Subscription;

  Products :Products;

  constructor(private ProductServiceService : ProductServiceService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("ngOnInit :=>");
    this.JsonReadSubscription = this.ProductServiceService.getJSON().subscribe(data => {
      this.Products=data.Products;
      console.log("Produccts:=>");
      console.log(this.Products);
  });
  }

  ngOnDestroy()
  {
    console.log("Distroy calals");
    this.JsonReadSubscription.unsubscribe();
  }
  redirect(pagename: string)
  {
    console.log("redirecvt to "+pagename);
    this.router.navigate(['/'+pagename,{dummyData: (new Date).getTime()}]);
  }


}
