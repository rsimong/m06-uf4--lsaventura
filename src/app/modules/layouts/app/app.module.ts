import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './create/create.component';
import { GetListComponent } from './get-list/get-list.component'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, CreateComponent, GetListComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
