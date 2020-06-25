import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Location } from '@angular/common';
import { User } from '../shared/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginserviceService ]
})
export class LoginComponent implements OnInit {


  constructor(private logservice:LoginserviceService, private location:Location) { }

  login(frm){
      let user = {
        email:frm.value.email,
        password:frm.value.password
      };

     this.logservice.loginService(user)
     .subscribe( res =>  {
          if(res.flag==true){
            console.log(res.msg);
           this.logservice.setToken(res.token);
            this.logservice.islogged = true;
            console.log(this.logservice.islogged);
            window.location.assign('http://localhost:4200');
            window.alert(res.msg);
          }
          else if(res.flag==false)
            console.log("err: "+res.msg);
            console.log("err: "+res.error);
            window.alert(res.msg);
       });
  }

  ngOnInit(): void {
  }

}
