import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Location } from '@angular/common';
import { User } from '../shared/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginserviceService]
})

export class RegisterComponent implements OnInit {

  constructor(private logservice:LoginserviceService, private location:Location) { }

  ngOnInit(): void {
  }

  register(frm){
    let userDetails = {
      uname:frm.value.uname,
      email:frm.value.email,
      mobNo:frm.value.mobNo,
      password:frm.value.password,
      role:frm.value.role
    };

       this.logservice.registerService(userDetails)
       .subscribe( res =>  {
            if(res.flag==true){
              console.log(res.msg);
              this.logservice.setToken(res.token);
              this.logservice.islogged = (!this.logservice.islogged)? true: false;
              window.location.assign('http://localhost:4200/home');
              window.alert(res.msg);
            }
            else if(res.flag==false){
              console.log("err: "+res.msg);
              console.log("err: "+res.error);
              window.alert(res.msg);
            }
         });
 }
}
