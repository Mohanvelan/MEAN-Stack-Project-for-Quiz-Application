import { Component, OnInit } from '@angular/core';
import { TOPICS } from '../shared/topics';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export const DEFAULT= {
   'title':'All Topics',
   't1':'General Aptitudes', 't2':'Verbal Reasoning',
   't3':'Non-verbal Reasoning', 't4':'Logical Reasoning',
   't5':'Programming Language', 't6':'Placement Papers',
   'img':'./assets/paper.png'
};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  topic:any;
  default:boolean = false;

  routingTo(val){
     if(window.localStorage.getItem('userToken'))
             this.router.navigate(['/instruction',this.topic.title, val]);
     else{
       window.alert('You have to login first...');
       window.location.assign('http://localhost:4200/login');
     }
  }

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
     const top = this.route.snapshot.params['topic'];
      if(!top){
        this.topic = DEFAULT;
        this.default = true;
      }
      else{
        this.topic =TOPICS[top];
        this.default = false;
       }
    }
}
