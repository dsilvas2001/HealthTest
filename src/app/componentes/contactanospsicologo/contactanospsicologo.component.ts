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
  selector: 'app-contactanospsicologo',
  templateUrl: './contactanospsicologo.component.html',
  styleUrls: ['./contactanospsicologo.component.css']
})
export class ContactanospsicologoComponent implements OnInit{
  user: any;

  constructor(private _CargarScripts: CargarScriptsService,private router: Router,
    private userAuthService: UserauthservicesService,

    private userService: UserService,){
      _CargarScripts.paginapsicologo(["menupsicologo"]);
      _CargarScripts.Webfont();

    _CargarScripts.Email();
    _CargarScripts.linkemail(["linkemail"]);
    _CargarScripts.Emailcontact(["scriptcontactanos"]);


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
