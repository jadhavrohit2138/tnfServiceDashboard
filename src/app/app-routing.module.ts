import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardDummyComponent } from './dash-board-dummy/dash-board-dummy.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [{
  path:'dashBoard',component:DashBoardComponent, 
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
