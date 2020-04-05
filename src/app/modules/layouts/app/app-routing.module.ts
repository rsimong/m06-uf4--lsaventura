import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from '../app/layouts/create/create.component';
import { GetListComponent } from '../app/layouts/get-list/get-list.component'
import { ErrNotFoundComponent } from './layouts/errors/err-not-found/err-not-found.component';
import { UpdateActivityComponent } from './layouts/update-activity/update-activity.component';



const routes: Routes = [
  {
    path: 'list',
    component: GetListComponent
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'update/:id',
    component: UpdateActivityComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
