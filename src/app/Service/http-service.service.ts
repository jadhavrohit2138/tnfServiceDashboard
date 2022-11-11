import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import globalConfigPath from '/storagForServiceDashboard/globalConfig.json';
import { Observable,catchError } from 'rxjs';
import constantValue from '../constant/constantStrings.json'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  environmentName: string | null
  Services: any
  statusResp: any

  constructor(private http: HttpClient) { }                     // Constructor

  pathStoreToSessionStorage() {
    sessionStorage.setItem(constantValue.string.globalConfig, JSON.stringify(globalConfigPath))
  }

  getJSON(url: any): Observable<any> {
    return this.http.get(url)
  }

  hitServiceApi(url: any) {
    return this.http.get(url);
  }

  getAssetPath(): any {
    this.environmentName = sessionStorage.getItem(constantValue.string.tabCall)
    if (this.environmentName === constantValue.string.dev) {
      return constantValue.assetsUrl.devUrl
    }
    else if (this.environmentName === constantValue.string.qa) {
      return constantValue.assetsUrl.qaUrl
    }
    else if (this.environmentName === constantValue.string.uat) {
      return constantValue.assetsUrl.uatUrl
    }
    else if (this.environmentName === constantValue.string.prod) {
      return constantValue.assetsUrl.prodUrl
    }
  }



  getColorService(status: string): string {
    switch (status) {
      case constantValue.statusCondition.up:
        return constantValue.statusColor.green;
      case constantValue.statusCondition.down:
        return constantValue.statusColor.red;
      default:
        return constantValue.statusColor.gray;
    }
  }
}

