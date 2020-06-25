import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  ansArray:any;
  correct:number = 0;
  wrong:number = 0;
  totQues:number = 0;

  tot:number = 100;

  correctRes:number = 0;
  wrongRes:number = 0;

  displayedColumns:string[] = ['qno', 'usrOption', 'correctAns', 'flag'];

  verified:any = [];

  validateAns(){
    for(const q in this.ansArray){

       if(this.ansArray[q].usrOption == this.ansArray[q].correctAns){
            this.correct = this.correct +1;
            this.verified[q] = {qno:(q+1), usrOption:this.ansArray[q].usrOption,
            correctAns: this.ansArray[q].correctAns, flag:'correct'};
       }
       else if(this.ansArray[q].usrOption != this.ansArray[q].correctAns){
          this.wrong = this.wrong +1;
          this.verified[q] = {qno:(q+1), usrOption:this.ansArray[q].usrOption,
            correctAns: this.ansArray[q].correctAns, flag:'wrong'};
       }
    }
  }


  constructor(private quizservice:QuizService) { }

  ngOnInit(): void {
     this.ansArray = this.quizservice.result;
     this.totQues = this.ansArray.length;

      this.validateAns();

     this.correctRes = (this.correct*this.tot) / this.totQues;
     this.wrongRes = (this.wrong*this.tot) / this.totQues;

  }

}
