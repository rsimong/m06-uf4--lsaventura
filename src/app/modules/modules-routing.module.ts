import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./layouts/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'app'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
