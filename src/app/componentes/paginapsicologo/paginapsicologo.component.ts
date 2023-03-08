import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { HttpErrorResponse } from "@angular/common/http";

import { UserService } from 'src/app/Services/user.service';

import { UserauthservicesService } from 'src/app/Services/userauthservices.service';


import Swal from 'sweetalert2'

@Component({
  selector: 'app-paginapsicologo',
  templateUrl: './paginapsicologo.component.html',
  styleUrls: ['./paginapsicologo.component.css']
})
export class PaginapsicologoComponent implements OnInit{

  persona :Persona=new Persona();
  user: any;


  constructor(private _CargarScripts: CargarScriptsService, public formulario: FormBuilder,
    private router: Router,
    private userService: UserService,
    private userAuthService: UserauthservicesService,
    private service: ServiceService){
    _CargarScripts.paginapsicologo(["menupsicologo"]);
  }

  ngOnInit(){
    this.mostrardatos();
}



mostrardatos(){
  
  this.user = this.userService.sesion;
  console.log("mira",this.user.user.tipousuario);
}
cerrarSesion() {
  this.userService.cerrarSesion();
  this.router.navigate(['/login']);
}

}
