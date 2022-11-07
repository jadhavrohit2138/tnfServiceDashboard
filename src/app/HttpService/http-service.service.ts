import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import globalConfigPath from '/storagForServiceDashboard/globalConfig.json';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
getGlobalJSONpath:any
getSingleJsonPath:any
fileToUpload: File | null = null;
  


handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)

}

  constructor(private http: HttpClient) { }

  
storeToLocalStorage(){
  localStorage.setItem('globalConfig', JSON.stringify(globalConfigPath))
  this.getDevUrl()
  // console.log(  this.getDevUrl())
}



//  getJSON(url:any): Observable<dataFormat> {
//   return this.http.get<dataFormat>(url)
// }


getDevUrl():any{
  this.getGlobalJSONpath=JSON.parse(`${localStorage.getItem('globalConfig')}`)
  // console.log(this.getGlobalJSONpath)
   this.getSingleJsonPath=this.getGlobalJSONpath.pathDEv
   this.handleFileInput(this.getSingleJsonPath)
  console.log(this.getSingleJsonPath)

  // module.exports['key']=this.getGlobalJSONpath
  // export: any = this.getSingleJsonPath
  // let temp = this.getGlobalJSONpath.pathDEv
  // console.log(temp)
  
  // try{

  //   // let temp = this.getSingleJsonPath

    // let content = require(this.getSingleJsonPath);
  let content = require("C:\\\\storagForServiceDashboard\\\\devService.json");
    // console.log(content)
    return content
  // }
  // catch (err){
  //   console.log("try cath log is here >>>>>>  "+err)
  // }

// try{
//   this.getJSON(this.getSingleJsonPath).subscribe((res)=>{
//     console.log("res is here ",res)
//     console.log("heyyyyyyyyyyyyyy")

//   }) 
// }
//   catch(err){
//     console.log(">>>>>>>>>>>>>>>>>",err)
//   }


}

hitServiceApi(url:any){
  return this.http.get(url);
}

getQaUrl(){
  this.getGlobalJSONpath=JSON.parse(`${localStorage.getItem('globalConfig')}`)
  console.log(this.getGlobalJSONpath.pathQA)
}
getUatUrl(){
  this.getGlobalJSONpath=JSON.parse(`${localStorage.getItem('globalConfig')}`)
  console.log(this.getGlobalJSONpath.pathUat)
}
getProdUrl(){
  this.getGlobalJSONpath=JSON.parse(`${localStorage.getItem('globalConfig')}`)
  console.log(this.getGlobalJSONpath.pathProd)
}

}
