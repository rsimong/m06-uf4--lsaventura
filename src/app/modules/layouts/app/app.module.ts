import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
