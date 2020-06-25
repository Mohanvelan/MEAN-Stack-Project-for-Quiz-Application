import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {

  topic:string;
  noOfQues:number;
  totMin:number;

  ques:any;
  pageEvent: PageEvent;
  pageIndex=0;
  options:string ='';

  ansArray:any=[];

  updatePage(event){

      this.pageIndex = event.pageIndex;

      this.options = (this.ansArray[event.pageIndex])? this.ansArray[event.pageIndex].usrOption : '';

     return event;
  }

  setSelect(){
    this.ansArray[this.pageIndex] = {'index':this.pageIndex, 'selected':true, 'usrOption':this.options,
    'correctAns':this.ques[this.pageIndex].ans};
  }

  submitQuiz(){
     console.log(this.ansArray);
     this.quizservice.resultService(this.ansArray);
     this.router.navigate(['/result']);
  }


  constructor(private route:ActivatedRoute, private quizservice:QuizService,
              private router:Router) { }

  ngOnInit(): void {
    this.topic = this.route.snapshot.params['top'];
    this.noOfQues = Number(this.route.snapshot.params['q']);
    this.totMin = Number(this.route.snapshot.params['t']);
    this.quizservice.getQuestions(this.topic,String(this.noOfQues))
    .subscribe( res => {
        if(res.flag==true){
            this.ques = res.data;
            console.log(this.ques);
        }
    });

    const m = this.totMin;
    var msec=m*60*1000;

    var from = new Date().getTime();
    from = from + msec;

  var x= setInterval(function(){

     var to= new Date().getTime();

     var dist=from - to;

   //var days = Math.floor(dist / (1000 * 60 * 60 * 24));
   //var hrs = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((dist % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML= min + "m " + sec + "s ";

   if (dist < 0) {
     clearInterval(x);
     document.getElementById("timer").innerHTML = "<p style='color:orangered'>TimeUp...</p>";
     this.submitQuiz();
   }
  }, 1000);

}

}
