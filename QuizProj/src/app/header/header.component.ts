import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = (window.localStorage.getItem('userToken'))? true: false;
  user;

  logOut(){
    this.logservice.logOutService();
  }

  constructor(private logservice:LoginserviceService) { }

  ngOnInit(): void {
  //  this.isLoggedIn = (this.logservice.islogged==null || false)? false: true;
    console.log(this.isLoggedIn);
    this.logservice.getProfileService()
    .subscribe( res => {
       if(res.flag==true){
         this.user = res.details;
       }
       else
         console.log(res.msg);
    });

  }

}
