import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  //private readonly URL = 'https://localhost:44339/weatherforecast/send/details';

  private readonly URL = 'https://gztwbo4el5.execute-api.ap-south-1.amazonaws.com/Prod/api/WeatherForecast/send/details'

  constructor(private http: HttpClient) { }

  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(this.URL);
  }

  SendRequestMail(MailModel)
  {
    const data =  JSON.stringify(MailModel);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
    //const config = { headers: new Hpp().set('Content-Type', 'application/json') };
    return this.http.post<any>(this.URL, data,headers).subscribe({
      next: data => console.log(data),
      error: error => console.error('There was an error!', error)
  })
  }
}
