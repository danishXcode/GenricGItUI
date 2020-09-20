import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from './Models/User';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UMCServicesService {
  
  private readonly URL = 'https://localhost:44364/user/';
  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  RegistrationFormModel = this.fb.group({
    FullName : [''],
    UserName : [''],
    Password : [''],
    })

  LoginFormModel = this.fb.group({
      UserName : [''],
  Password : [''],
  })

  constructor(private http: HttpClient,private fb : FormBuilder) 
  {
    this.currentUserSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

 
  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }


  Login()
  {
    var body = {
      UserName : this.LoginFormModel.value.UserName,
      Password : this.LoginFormModel.value.Password,
    };
    console.log(body);
    const data =  JSON.stringify(body);  
    const headers =  {
      headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
    };
    //const config = { headers: new Hpp().set('Content-Type', 'application/json') };
    return this.http.post<any>(this.URL+'login', data,headers).subscribe({
      next: data => {
        console.log("Login success")
        console.log(data)
        var tkn = data.token.result
        localStorage.setItem('currentUser', JSON.stringify(data.token.result));
        this.currentUserSubject.next(tkn);
      },
      error: error => console.error('There was an error!', error)
  });
 }

 Register()
 {
   var body = {
     UserName : this.RegistrationFormModel.value.UserName,
     FullName : this.RegistrationFormModel.value.FullName,
     Password : this.RegistrationFormModel.value.Password,
   };
   console.log(body);
   const data =  JSON.stringify(body); 
   const headers =  {
    headers: new  HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  };
   return  this.http.post(this.URL+'RegisterTenant',data,headers);
 }

 GetData()
 {
   return this.http.get(this.URL+'getvalue').subscribe({
     next:data =>
     {
      console.log('getvalue'+data)
     }
   })
 }
}
