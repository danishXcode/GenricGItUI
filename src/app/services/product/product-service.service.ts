import { Product } from './../../core/ModelsClasses/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) {
    // this.getJSON(path).subscribe(data => {
    //     console.log(data);
    // });
}

  public getJSON(): Observable<any> {
   // return this.http.get("./assets/UIConfiguration.json");
   return this.http.get("./assets/Data/products.json");
  }

  public getProductByID(ProductId:string): Observable<any> {
    // return this.http.get("./assets/UIConfiguration.json");
    return this. getJSON().pipe(filter(p=>p.ProductId == ProductId));
  }
}
