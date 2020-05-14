import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from '../app/layouts/create/create.component';
import { GetListComponent } from '../app/layouts/get-list/get-list.component'
import { ErrNotFoundComponent } from './layouts/errors/err-not-found/err-not-found.component';
import { UpdateActivityComponent } from './layouts/update-activity/update-activity.component';
import { CanDeactivateGuard } from 'src/app/core/guards/can-deactivate.guard';



const routes: Routes = [
  {
    path: 'list',
    component: AppComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'update/:id',
        component: UpdateActivityComponent,
        canDeactivate: [CanDeactivateGuard]
      }]
  },
  {
    path: "",
    redirectTo: "list"
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
