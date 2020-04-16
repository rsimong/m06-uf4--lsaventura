import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './layouts/create/create.component';
import { GetListComponent } from './layouts/get-list/get-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrNotFoundComponent } from './layouts/errors/err-not-found/err-not-found.component';
import { UpdateActivityComponent } from './layouts/update-activity/update-activity.component';
import { DeleteActivityComponent } from './layouts/delete-activity/delete-activity.component';
import { WeatherComponent } from './components/weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    GetListComponent,
    ErrNotFoundComponent,
    UpdateActivityComponent,
    DeleteActivityComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
