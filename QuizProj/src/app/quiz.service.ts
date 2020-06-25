import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

    result:any;

   getQuestions(topic:string, noOfQues:string):Observable<any>{
    // let headers = new HttpHeaders();
     //headers.append('Content-Type', 'application/json');

     //let params = new HttpParams().set('topic',topic).set('noOfQues',noOfQues);
      return this.http.post<any>('http://localhost:4201/api/questions',{topic:topic, noOfQues:noOfQues});
   }


   resultService(ansArray){
      this.result = ansArray;
   }

  constructor(private http:HttpClient, private route:Router) { }
}
