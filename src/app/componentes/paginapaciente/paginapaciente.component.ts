import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { HttpErrorResponse } from "@angular/common/http";

import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-paginapaciente',
  templateUrl: './paginapaciente.component.html',
  styleUrls: ['./paginapaciente.component.css']
})
export class PaginapacienteComponent implements OnInit{

  constructor(private _CargarScriptsuser: CargarScriptsService, 
    private router: Router,
    private userService: UserService,){
    _CargarScriptsuser.popuptest(["popup"]);
    _CargarScriptsuser.darkperfiluser(["darkperfiluser"]);
    _CargarScriptsuser.Webfont();

    this.cargarestilo();

   
  }

  ngOnInit() { 
  }
  cargarestilo(){
    let node = document.createElement('link');
    node.href = "https://unicons.iconscout.com/release/v4.0.0/css/line.css";//Change to your js file
    node.type = 'text/css';
    node.rel="stylesheet"
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  cerrarSesion() {
    this.userService.cerrarSesion();
    this.router.navigate(['/login']);
  }

}
