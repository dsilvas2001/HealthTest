import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, 
  RouterStateSnapshot,   Router,
  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponse } from '../Modelo/Persona';
import { UserService } from '../Services/user.service'


@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
  
  
  constructor(private router: Router,
    private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      const sesion = this.userService.sesion;
      const data = JSON.parse(localStorage.getItem("sesion_login")!) as LoginResponse;


      if (!sesion) {
        this.router.navigate(["/login"]);
        return false;
      }
      else if (sesion.user.tipousuario == "Administrador") {
        return true;
      } else if (sesion.user.tipousuario == "Psicologo") { 
        this.router.navigate(['/psicologo/paginapsicologo']);
        return false;
      } else if (sesion.user.tipousuario == "Paciente") {
        this.router.navigate(['/paciente/paginapaciente']);
        return false;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
