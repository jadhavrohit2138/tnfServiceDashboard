import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import globalConfigPath from '/storagForServiceDashboard/globalConfig.json';
import { Observable } from 'rxjs';
import { join } from 'path';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  environmentName: string|null

  constructor(private http: HttpClient) { }                     // Constructor

  pathStoreToSessionStorage() {
    sessionStorage.setItem('globalConfig', JSON.stringify(globalConfigPath))
  }

  getJSON(url: any): Observable<any> {
    return this.http.get(url)
  }

  hitServiceApi(url: any) {
    return this.http.get(url);
  }

  getAssetPath(): any {
    this.environmentName = sessionStorage.getItem('tabCall')
    if (this.environmentName === "dev") {
      return "assets/devDefaultData.json"
    }
    else if (this.environmentName === "qa") {
      return "assets/qaDefaultData.json"
    }
    else if (this.environmentName === "uat") {
      return "assets/uatDefaultData.json"
    }
    else if (this.environmentName === "prod") {
      return "assets/prodDefaultData.json"
    }
  }
}
