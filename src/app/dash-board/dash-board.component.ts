import { Component, OnInit, Input, importProvidersFrom } from '@angular/core';
import { HttpServiceService } from "../Service/http-service.service"
import constantValue from '../constant/constantStrings.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  Services: any;
  environmentName: any
  statusResp: any
  assetUrl: string

  constructor(private service: HttpServiceService,private router:Router) { } // Constructor

  callRefresh(singleService: any) {
    singleService.status = constantValue.string.loading
    console.log(`------------\n${constantValue.string.Refreshed} `+singleService.name+ ` ${constantValue.string.Service}\n`+singleService.url)
    this.service.hitServiceApi(singleService.url).subscribe(resp => {
      this.statusResp = resp
      singleService.status = this.statusResp.status
    });
  }

  getColor(status: string): any {
    return this.service.getColorService(status);
  }


  ngOnInit(): void {    
    this.assetUrl = this.service.getAssetPath();
    this.service.getJSON(this.assetUrl).subscribe((resp) => {
        this.Services = resp
        this.Services.forEach((element: any) => {
          this.service.hitServiceApi(element.url).subscribe(data => {
            this.statusResp = data
            element.status = this.statusResp.status
          },error=>{
            this.router.navigateByUrl('pageNotFound')
          });
        });
      },error=>{
        this.router.navigateByUrl('pageNotFound')
      })
  }
}