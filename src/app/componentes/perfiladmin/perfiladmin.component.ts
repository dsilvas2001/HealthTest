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
  selector: 'app-perfiladmin',
  templateUrl: './perfiladmin.component.html',
  styleUrls: ['./perfiladmin.component.css']
})
export class PerfiladminComponent implements OnInit{

  persona :Persona=new Persona();
  user: any;


  constructor(private _CargarScripts: CargarScriptsService, 
    public formulario: FormBuilder,
    private router: Router,
    private userService: UserService, private service: ServiceService){
    _CargarScripts.Pagadmin(["scriptpagadmin"]);
    _CargarScripts.Webfont();

    this.scrippagprincipal();

  }
  ngOnInit(){
    this.cargarIcons();
    this.mostrardatos();
}



mostrardatos(){
  
  this.user = this.userService.sesion;
  console.log("mira",this.user.user.tipousuario);
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








cargarIcons(){
  let node = document.createElement('link');
  node.href = "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css ";//Change to your js file
  node.type = 'text/css';
  node.rel="stylesheet"
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}
scrippagprincipal() {

  let node = document.createElement('script');
  node.src = "https://cdn.jsdelivr.net/npm/apexcharts";//Change to your js file
  node.type = 'text/javascript';
  node.async = true;
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}




cerrarSesion() {
  this.userService.cerrarSesion();
  this.router.navigate(['/login']);
}


}
