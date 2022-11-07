import { Component, Input, OnInit } from '@angular/core';
// require("")
@Component({
  selector: 'app-dash-board-dummy',
  templateUrl: './dash-board-dummy.component.html',
  styleUrls: ['./dash-board-dummy.component.css']
})
export class DashBoardDummyComponent implements OnInit {
  @Input() devPAth:any

  constructor() { }

  ngOnInit(): void {
  }

}
