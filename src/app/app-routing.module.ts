import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ErrorHandlerCompComponent } from './error-handler-comp/error-handler-comp.component';

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
  path:'pageNotFound',component:ErrorHandlerCompComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
