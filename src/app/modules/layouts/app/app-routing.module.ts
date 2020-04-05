import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from '../app/create/create.component';
import { GetListComponent } from '../app/get-list/get-list.component'



const routes: Routes = [
  {
    path: 'create',component:CreateComponent,
  },
  {
    path: 'list',component:GetListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
