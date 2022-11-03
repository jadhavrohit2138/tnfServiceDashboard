import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import jsonData from '../serviceData/serviceData.json';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  show:boolean;
  posts:any;
  constructor() {

   }
   
  ngOnInit(): void {
    this.show=true;
    this.posts=jsonData
  }

}
