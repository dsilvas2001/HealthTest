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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  FormularioAddUser: FormGroup;
  tipoUsuario: string;
  variablenombre_completo: string = '';
  variableusuario: string = '';
  variableemail: string = '';
  variablecontrasena: string = '';
  err: boolean = false;


  model: any = {};
  getData: boolean;
  persona: Persona = new Persona();
  personaLogin: Persona = new Persona();
  myForm: FormGroup;

  constructor(
    private _CargarScripts: CargarScriptsService,
    public formulario: FormBuilder,
    private router: Router,
    private userService: UserService,
    private userAuthService: UserauthservicesService,
    private service: ServiceService
  ) {
    _CargarScripts.carga(['scriplogin']);
    _CargarScripts.tipouser(['selectipouser']);
    this.tipoUsuario = '';
    
  }

  ngOnInit() {
    console.log('initializing');
  }

  clickMe() {}


  setTipoUsuario(tipo: string) {
    
    this.persona.tipousuario = tipo;
  }
  userLogin(){
    if (this.persona.tipousuario == '') {
      this.espacioenblancostipouser();
      return;
    }
    if (this.persona.username == '') {
      this.espacioenblancosusuario();
      return;
    }
    if (this.persona.password == '') {
      this.espacioenblancoscontraseĆ±a();
      return;
    }
    /*if (this.persona.tipousuario == 'Administrador') {
      this.successfullLogin();
      this.router.navigate(["/paginaadmin"]);
    }*/
    if (this.persona.tipousuario == 'Psicologo') {
      this.successfullLogin();
      this.router.navigate(["/paginapsicologo"]);
    }
    if (this.persona.tipousuario == 'Paciente') {
      this.successfullLogin();
      this.router.navigate(["paginapaciente"]);
    }
    console.log(this.persona)
    /*this.service.loginUser(this.persona).subscribe(data=>{
      if (this.persona.tipousuario == 'Administrador') {
        this.successfullLogin();
        this.router.navigate(["paginaadmin"]);
      }
      if (this.persona.tipousuario == 'Psicologo') {
        this.successfullLogin();
        this.router.navigate(["paginapsicologo"]);
      }
      if (this.persona.tipousuario == 'Paciente') {
        this.successfullLogin();
        this.router.navigate(["paginapaciente"]);
      }
    },error => this.errorLogin ())*/
  }

  Guardar() {
    console.log('Objecto persona: ', this.persona);

    if (this.persona.tipousuario == '') {
      this.espacioenblancostipouser();
      return;
    }
    if (this.persona.name == '') {
      this.espacioenblancosnombre();
      return;
    }
    if (this.persona.username == '') {
      this.espacioenblancosusuario();
      return;
    }
    if (this.persona.password == '') {
      this.espacioenblancoscontraseĆ±a();
      return;
    }
    if (this.persona.email == '') {
      this.espacioenblancosemail();
      return;
    }
    this.service.createPersona(this.persona).subscribe({
      next: (data) => {
        this.confirmarregister ();
        this.router.navigate(['login']);
      },
      error: (error) => {
        this.errorregister ();
        console.log('Error: ', error);
      },
    });
  }
  successfullLogin (){
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Bienvenido '+ this.persona.username,
    showConfirmButton: false,
    timer: 1500
  })}
  errorLogin (){
    Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Usuario/ContraseĆ±a no Encontrados',
    showConfirmButton: false,
    timer: 1500
  })}

  errorregister (){
    Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Sus datos no se ingresaron correctamente',
    showConfirmButton: false,
    timer: 1500
  })}

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
      title: 'ĀæEstĆ” seguro?',
      text: "Falta de ingresar el tipo de usuario!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido!'
    })
  }
  espacioenblancosnombre(){
    Swal.fire({
      title: 'ĀæEstĆ” seguro?',
      text: "Ingrese el nombre completo!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido!'
    })
  }
  espacioenblancosusuario(){
    Swal.fire({
      title: 'ĀæEstĆ” seguro?',
      text: "Ingrese el usuario!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido!'
    })
  }
  espacioenblancoscontraseĆ±a(){
    Swal.fire({
      title: 'ĀæEstĆ” seguro?',
      text: "Ingrese la contraseĆ±a!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido!'
    })
  }
  espacioenblancosemail(){
    Swal.fire({
      title: 'ĀæEstĆ” seguro?',
      text: "Ingrese su correo electronico!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Entendido!'
    })
  }

  

  loginutentication(){

  /*  this.service.loginUsuario(this.persona).subscribe(
      (response) => {
        console.log('Objecto persona: ', response);

      },
      (error) => {
        this.errorregister ();
        console.log('Error: ', error);
      },
    );*/

    this.service.loginUsuario(this.persona).subscribe({
      next: (data) => {
        this.confirmarregister ();
        this.router.navigate(['login']);
      },
      error: (error) => {
        this.errorregister ();
        console.log('Error: ', error);
      },
    });
  }

  login() {
    if (this.personaLogin.username == '') {
      this.espacioenblancosusuario();
      return;
    }
    if (this.personaLogin.password == '') {
      this.espacioenblancoscontraseĆ±a();
      return;
    }
    this.userService.login(this.personaLogin).subscribe({
      next: (data) => {
        console.log(data);
        this.userService.guardarSesion(data);
        if (data.user.tipousuario == "Administrador") {
          this.router.navigate(['/administrador/paginaadmin']);
        } else if (data.user.tipousuario == "Psicologo") { 
          this.router.navigate(['/psicologo/paginapsicologo']);
        } else if (data.user.tipousuario == "Paciente") {
          this.router.navigate(['/paciente/paginapaciente']);
        }
      },
      error: (error) => {
        this.errorregister ();
        console.log('Error: ', error);
      },
    });
  }

  cerrarSesion() {
    this.userService.cerrarSesion();
    this.router.navigate(['/login']);
  }

 

      
  













  
}

