import { Component, OnInit, Input, importProvidersFrom } from '@angular/core';
import { HttpServiceService } from "../HttpService/http-service.service"

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

  constructor(private service: HttpServiceService) { } // Constructor

  callRefresh(singleService: any) {
    console.log("------------\nRefreshed " + singleService.name + " Service\n"+singleService.url)
    this.service.hitServiceApi(singleService.url).subscribe(resp => {
      this.statusResp = resp
      singleService.status = this.statusResp.status
    });
  }

  getColor(Service: string): any {
    switch (Service) {
      case 'up':
        return 'green';
      case 'down':
        return 'red';
      default:
        return 'gray';
    }
  }


  ngOnInit(): void {    // Ng On It
    this.assetUrl = this.service.getAssetPath();
    this.service.getJSON(this.assetUrl).subscribe((resp) => {
        this.Services = resp
        this.Services.forEach((element: any) => {
          this.service.hitServiceApi(element.url).subscribe(data => {
            this.statusResp = data
            element.status = this.statusResp.status
          });
        });
      })
  }
}