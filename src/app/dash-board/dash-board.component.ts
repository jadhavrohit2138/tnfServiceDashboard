import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import jsonData from '../serviceData/serviceData.json';
import jsonDatatemp from '/angular_nodejs/storagForServiceDashboard/globalConfig.json';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  show:boolean;
  Services:any;
  temp:any
  constructor() {

   }

   callTemp(Service:any){
   
    this.temp=`${Service.name} is refreshed`
    console.log(Service.name)
   }
   
  ngOnInit(): void {
    this.show=true;
    this.Services=jsonData
    localStorage.setItem('globalConfig',JSON.stringify(jsonDatatemp))
    console.log(localStorage.getItem('globalConfig'))
    this.temp= localStorage.getItem('globalConfig')
    console.log(JSON.parse(this.temp))
  }

}
