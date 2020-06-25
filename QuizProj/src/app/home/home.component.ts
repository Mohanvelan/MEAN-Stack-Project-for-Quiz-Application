import { Component, OnInit } from '@angular/core';
import { TOPICS } from '../shared/topics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  topics:any = TOPICS;

  constructor() { }

  ngOnInit(): void {
  }

}
