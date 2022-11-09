import { Component } from '@angular/core';
import {HttpServiceService} from './HttpService/http-service.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tnfServiceDashboard';

constructor(private service:HttpServiceService, private httpClient:HttpClient ){}
  ngOnInit(): void {
    this.service.pathStoreToSessionStorage();  
  }
  
  devTabCall(){
    sessionStorage.setItem('tabCall',"dev" )
  }
  qaTabCall(){
    sessionStorage.setItem('tabCall',"qa" )  
  }

  uatTabCall(){
    sessionStorage.setItem('tabCall',"uat" ) 
  }

  prodTabCall(){
    sessionStorage.setItem('tabCall',"prod" ) 
  }
}