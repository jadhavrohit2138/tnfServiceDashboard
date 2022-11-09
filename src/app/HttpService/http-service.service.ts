import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import globalConfigPath from '/storagForServiceDashboard/globalConfig.json';
import { Observable } from 'rxjs';
// import { readFileSync, promises as fsPromises } from '';
import { join } from 'path';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  getGlobalJSONpath: any
  getSingleJsonPath: any
  fileToUpload: any
  sample:any

  constructor(private http: HttpClient) { } // Constructor


  storeToLocalStorage() {
    sessionStorage.setItem('globalConfig', JSON.stringify(globalConfigPath))
  }



  getJSON(url: any): Observable<any> {
    return this.http.get(url)
  }

  hitServiceApi(url: any) {
    return this.http.get(url);
  }
}
