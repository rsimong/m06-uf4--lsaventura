import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean{
    //comprovem si no existeix
    if(!localStorage.getItem("user")){
      //redirigeix aquesta ruta
      this.router.navigate(['auth']);
      return false;
    }
    return true;
    
  }
}
