import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardDummyComponent } from './dash-board-dummy/dash-board-dummy.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
{
  path:'devDashBoard',component:DashBoardComponent, 
},
{
  path:'qaDashBoard',component:DashBoardComponent, 
},
{
  path:'uatDashBoard',component:DashBoardComponent, 
},
{
  path:'prodDashBoard',component:DashBoardComponent, 
},
{
  path:'dummy',component:DashBoardDummyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
