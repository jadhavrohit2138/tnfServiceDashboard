import { Component, OnInit, Input, importProvidersFrom } from '@angular/core';
// import jsonData from 'C:\\angular_nodejs\\storagForServiceDashboard\\devService.json';
// import jsonData from '../serviceData/serviceData.json';
import globalConfigPath from '/angular_nodejs/storagForServiceDashboard/globalConfig.json';
import { HttpServiceService } from "../HttpService/http-service.service"

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  show: boolean;
  Services: any;
  temp: any
  temp1: any
  globalPathString: any
  status: any
  assetUrl: string
  lowercase:string

  constructor(private service: HttpServiceService) { } // Constructor

  callRefresh(Service: any) {
    this.temp = `${Service.name} is refreshed`
    console.log("------------\nRefreshed " + Service.name + " Service")
    console.log(Service.url)
    this.service.hitServiceApi(Service.url).subscribe(data => {
      this.status = data
      Service.status = this.status.status
    });
  }

  getColor(Service: string):any{
    // this.lowercase=Service.toLowerCase()
    switch(Service) {
      case 'up' :
        return 'green';
      case 'down' :
        return 'red';
      default:
        return '';
    }


  }





  ngOnInit(): void {    // Ng On It
    this.globalPathString = sessionStorage.getItem('tabCall')
    if (this.globalPathString === "dev") {
      this.assetUrl = "assets/devDefaultData.json"
    }
    else if (this.globalPathString === "qa") {
      this.assetUrl = "assets/qaDefaultData.json"
    }
    else if (this.globalPathString === "uat") {
      this.assetUrl = "assets/uatDefaultData.json"
    }
    else if (this.globalPathString === "prod") {
      this.assetUrl = "assets/prodDefaultData.json"
    }
    this.show = true;
    this.service.getJSON(this.assetUrl).subscribe((res) => {
      this.Services = res
      this.Services.forEach((element: any) => {
        this.service.hitServiceApi(element.url).subscribe(data => {
          this.status = data
          element.status = this.status.status
        });
      });
    })
  }
}