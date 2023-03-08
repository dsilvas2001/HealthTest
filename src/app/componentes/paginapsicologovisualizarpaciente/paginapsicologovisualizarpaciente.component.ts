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
  selector: 'app-paginapsicologovisualizarpaciente',
  templateUrl: './paginapsicologovisualizarpaciente.component.html',
  styleUrls: ['./paginapsicologovisualizarpaciente.component.css']
})
export class PaginapsicologovisualizarpacienteComponent implements OnInit{
  model: any = {};
  getData: boolean;
  personas: Persona[] = [];
  persona: Persona = new Persona();
  user: any;


  constructor(
    private _CargarScripts: CargarScriptsService,
    public formulario: FormBuilder,
    private router: Router,
    private userService: UserService,
    private service: ServiceService
  ) {
    _CargarScripts.paginapsicologo(["menupsicologo"]);


  }

  contadorusuario: number;




  ngOnInit(){
    console.log('initializing');

   
    this.listarpaciente();

    this.contador();
    this.mostrardatos();

    /*this.service.gettotalpaciente().subscribe(data => {
      console.log('Objecto pacientes guardad: ', data);
      this.persona.contadorusuario = data.contadorusuario;
    });*/
}

listarpaciente(){
  this.service.getPersonas().subscribe((data) => {
    console.log('Objecto persona: ', data);
    this.personas = data;
  });

}

contador()
{
  this.service.gettotalpaciente().subscribe((data) => {
    console.log('Objecto pacientes: ', data);
    this.contadorusuario = data;
  });
}

/*contadorpacientes(persona: Persona): void {
  localStorage.setItem("contadorusuario", persona.contadorusuario.toString());
  let contadorusuario = localStorage.getItem("id");

  if (contadorusuario !== null && contadorusuario !== undefined) {
    this.service.gettotalpaciente().subscribe((data) => {
      console.log('Objecto pacientes: ', data);
      this.personas = data;
    });
}
}*/




Editar(persona: Persona): void {
  localStorage.setItem("id", persona.id.toString());
  this.router.navigate(["/psicologo/editarpacienteperfil"]);
}




Delete(persona: Persona) {
  this.service.deletePersona(persona).subscribe((data) => {
    this.personas = this.personas.filter((p) => p !== persona);
    alert("Usuario eliminado...");
  });
}
DeletePersona(persona:Persona) {
  Swal.fire({
    title: '¿Estas seguro?',
    text: "Confirma si deseas eliminar " + persona.email,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si , Elimínalo'
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deletePersona(persona).subscribe((dato) => {
        this.personas = this.personas.filter((p) => p !== persona);
        this.contador();

        Swal.fire(
          'Eliminado!',
          'El Paciente ha sido eliminado.',
          'success'
        )
      });
    }
  })
}



Guardar() {
  console.log('Objecto persona: ', this.persona);

  
  if (this.persona.name == '') {
    this.espacioenblancosnombre();
    return;
  }
  if (this.persona.username == '') {
    this.espacioenblancosusuario();
    return;
  }
  if (this.persona.password == '') {
    this.espacioenblancoscontraseña();
    return;
  }
  if (this.persona.email == '') {
    this.espacioenblancosemail();
    return;
  }
  this.service.createPersona(this.persona).subscribe({
    next: (data) => {
      this.confirmarregister ();
      this.listarpaciente();
      this.contador();
    },
    error: (error) => {
      this.errorregister ();
      console.log('Error: ', error);
    },
  });

}
setTipoUsuario(tipo: string) {
    
  this.persona.tipousuario = tipo;
}

confirmarregister (){
  Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Usuario Registrado',
  showConfirmButton: false,
  timer: 1500
})}
espacioenblancostipouser(){
  Swal.fire({
    title: '¿Está seguro?',
    text: "Falta de ingresar el tipo de usuario!",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Entendido!'
  })
}
espacioenblancosnombre(){
  Swal.fire({
    title: '¿Está seguro?',
    text: "Ingrese el nombre completo!",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Entendido!'
  })
}
espacioenblancosusuario(){
  Swal.fire({
    title: '¿Está seguro?',
    text: "Ingrese el usuario!",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Entendido!'
  })
}
espacioenblancoscontraseña(){
  Swal.fire({
    title: '¿Está seguro?',
    text: "Ingrese la contraseña!",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Entendido!'
  })
}
espacioenblancosemail(){
  Swal.fire({
    title: '¿Está seguro?',
    text: "Ingrese su correo electronico!",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Entendido!'
  })
}

errorregister (){
  Swal.fire({
  position: 'top-end',
  icon: 'error',
  title: 'Sus datos no se ingresaron correctamente',
  showConfirmButton: false,
  timer: 1500
})}


mostrardatos(){
  
  this.user = this.userService.sesion;
  console.log("mira",this.user.user.tipousuario);
}
cerrarSesion() {
  this.userService.cerrarSesion();
  this.router.navigate(['/login']);
}



}
