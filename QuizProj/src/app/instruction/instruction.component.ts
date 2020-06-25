import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})

export class InstructionComponent implements OnInit {

  topic:any;
  subTopic:string;
  noOfQues:number=0;
  totMin:number=0;
  qType:string;
  start:boolean = false;

  quizSetter(frm){
     this.noOfQues = frm.value.noOfQues;
     this.totMin = frm.value.totMin;
     this.qType = frm.value.qType;
     this.start = true;
  }

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.topic = this.route.snapshot.params['topic'];
    this.subTopic = this.route.snapshot.params['subTopic'];
  }

}
