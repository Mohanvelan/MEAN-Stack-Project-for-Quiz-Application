import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})

export class LoginserviceService{

  public token: string;
  public islogged: boolean;

    public setToken(token:string){
        window.localStorage.setItem('userToken',token);
        this.token=token;
    }

    public getToken():string{
        if(!this.token){
           this.token = window.localStorage.getItem('userToken');
        }
       return this.token;
    }


  loginService(user): Observable<any>{
      let header = new HttpHeaders();
       header.append('Content-type', 'application/json');

      return this.http.post<any>('http://127.0.0.1:4201/api/login',user,{headers:header});
  }

  registerService(user): Observable<any>{
        console.log(user);
        let header = new HttpHeaders();
        header.append('Content-type', 'application/json');
        return this.http.post<any>('http://127.0.0.1:4201/api/register',user,{headers:header});
  }

  getProfileService():Observable<any>{

    return this.http.get<any>('http://localhost:4201/api/profile', {
       headers: {Authorization: this.getToken()}
     });
  }

  public isLoggedIn(){

     return (this.islogged)? true : false;
  }

  public logOutService(){

     this.token='';
     this.islogged = (this.islogged)? false: true;
     window.localStorage.removeItem('userToken');
     console.log('You\'re logged out successfully...');
     window.location.assign('http://localhost:4200/home');
     window.alert('You\'re going to logout...');
  }


  constructor(private http: HttpClient, private router: Router, private location:Location) { }
}
