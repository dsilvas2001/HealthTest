import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { Firestore, collectionData, docData, addDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';
import { Usuario } from 'src/app/servicio/Usuarios';

import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  FormularioAddUser: FormGroup;
  tipoUsuario: string;
  variablenombre_completo: string="";
  variableusuario: string="";
  variableemail: string="";
  variablecontrasena: string="";

  
  constructor(
    private _CargarScripts: CargarScriptsService,
    public formulario: FormBuilder,
    private _userService: CrudService
  ) {
    _CargarScripts.carga(['scriplogin']);
    _CargarScripts.tipouser(['selectipouser']);
    this.FormularioAddUser = this.formulario.group({
      nombre_completo: [''],
      usuario: [''],
      email: [''],
      contraseña: [''],
      tipoUsuario: [''],
    });
    this.tipoUsuario = "";
  }

  ngOnInit() {
    console.log('initializing');
  }

  enviarDatosUser(): any {
    let usuario: Usuario
    usuario = {
      usuario: this.variableusuario,
      contrasena: this.variablecontrasena,
      email: this.variableemail,
      nombre_completo: this.variablenombre_completo,
      tipuser: this.tipoUsuario
    }
    this._userService.createUsuario(usuario)
    .then(result => {
      this.confirmarregister ();
    })
    .catch(err => {
      console.log('error', err);
    })
  }

  clickMe() {}

  setTipoUsuario(tipo: string) {
    this.FormularioAddUser.get("tipoUsuario")?.setValue(tipo);
    let tipoUser = this.FormularioAddUser.get("tipoUsuario")?.value;
    console.log(tipoUser);
    this.tipoUsuario = tipoUser;
    console.log(this.FormularioAddUser.value);
  }


  confirmarregister (){
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Usuario Registrado',
    showConfirmButton: false,
    timer: 1500
  })}
}
