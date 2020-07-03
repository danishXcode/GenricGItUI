import { Products ,Product} from './../ModelsClasses/Product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product/product-service.service';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {
  Pid:string;
Products:Products;
  Product:Product;
  JsonReadSubscription : Subscription;

  constructor(private route: ActivatedRoute,
    private ProductServiceService : ProductServiceService
    ) {

      route.params.subscribe(val => {
        this.route.params.subscribe(params => {
          this.Pid = params.Pid;
          });
    
          this.JsonReadSubscription = this.ProductServiceService.getJSON().subscribe(data => {
            data.Products.forEach(element => {
              if(element.ProductId==this.Pid)
              {
                this.Product=element;
              }
            });
        });
      });
    }

  ngOnInit(): void {

    // this.route.params.subscribe(params => {
    //   this.Pid = params.Pid;
    //   });

    //   this.JsonReadSubscription = this.ProductServiceService.getJSON().subscribe(data => {
    //     data.Products.forEach(element => {
    //       if(element.ProductId==this.Pid)
    //       {
    //         this.Product=element;
    //       }
    //     });
    // });
  }

  
  ngOnDestroy()
  {
    console.log("Distroy calals Product");
    this.JsonReadSubscription.unsubscribe();
  }

}
