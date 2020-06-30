import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonReadServiceService {

  constructor(private http: HttpClient) {
    // this.getJSON(path).subscribe(data => {
    //     console.log(data);
    // });
}

  public getJSON(path : string): Observable<any> {
   // return this.http.get("./assets/UIConfiguration.json");
   return this.http.get(path);
  }
}
