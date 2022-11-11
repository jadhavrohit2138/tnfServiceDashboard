import { Component } from '@angular/core';
import {HttpServiceService} from './Service/http-service.service';
import constantValue from './constant/constantStrings.json'
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
    sessionStorage.setItem(constantValue.string.tabCall,constantValue.string.dev)
  }

  qaTabCall(){
    sessionStorage.setItem(constantValue.string.tabCall,constantValue.string.qa)  
  }

  uatTabCall(){
    sessionStorage.setItem(constantValue.string.tabCall,constantValue.string.uat) 
  }

  prodTabCall(){
    sessionStorage.setItem(constantValue.string.tabCall,constantValue.string.prod) 
  }
}