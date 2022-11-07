import { Component, OnInit,Input, importProvidersFrom } from '@angular/core';
// import jsonData from 'C:\\angular_nodejs\\storagForServiceDashboard\\devService.json';
// import jsonData from '../serviceData/serviceData.json';
import globalConfigPath from '/angular_nodejs/storagForServiceDashboard/globalConfig.json';
import{ HttpServiceService } from "../HttpService/http-service.service"

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  show:boolean;
  Services:any;
  temp:any
  globalPathString:any

  constructor(private service:HttpServiceService) {

   }

   callRefresh(Service:any){
    this.temp=`${Service.name} is refreshed`
    console.log(Service.name)
    console.log(Service.url)
    this.service.hitServiceApi(Service.url).subscribe(data=>
      {
        console.log(">>>>>>> "+data)
    });
   }
  
  ngOnInit(): void {
    // this.show=true;
    // this.Services = this.service.getDevUrl()
    // console.log(this.Services)
        // this.globalPathString= localStorage.getItem('globalConfig')
        // console.log(JSON.parse(this.globalPathString))
  }

}
