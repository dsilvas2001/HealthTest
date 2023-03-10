import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import { HttpErrorResponse } from "@angular/common/http";

import { UserService } from 'src/app/Services/user.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-perfilpaciente',
  templateUrl: './perfilpaciente.component.html',
  styleUrls: ['./perfilpaciente.component.css']
})
export class PerfilpacienteComponent implements OnInit{

  user: any;

  constructor(private _CargarScriptsuser: CargarScriptsService, 
    private router: Router,
    private userService: UserService,private service: ServiceService){
    _CargarScriptsuser.popuptest(["popup"]);
    _CargarScriptsuser.darkperfiluser(["darkperfiluser"]);
    _CargarScriptsuser.Webfont();

    this.cargarestilo();

   
  }

  ActualizarPersona(user: any) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas Actualizar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , Actualizalo!'
      
    }).then((result) => {
      if (result.isConfirmed) {
          this.service.updatePersona(user).subscribe((dato) => {
            Swal.fire(
              'Usuario Actualizado!',
              'El Usuario ha sido Actualizado con exito',
              'success'
            )
          });
      }
    })
  
  }
  

  ngOnInit(){
    this.mostrardatos();
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
  mostrardatos(){
  
    this.user = this.userService.sesion;
    console.log("mira",this.user.user.tipousuario);
  }
}
