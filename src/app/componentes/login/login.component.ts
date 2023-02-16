import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ServiceService } from 'src/app/Services/service.service';

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

  model: any = {};
  getData: boolean;
  persona: Persona = new Persona();
  usuario: Usuario = new Usuario();

  constructor(
    private _CargarScripts: CargarScriptsService,
    public formulario: FormBuilder,
    private router: Router,
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

  Guardar() {
    console.log('Objecto persona: ', this.persona);

    if (this.persona.tipousuario == '') {
      alert('Fatla el tipo de usuario');
      return;
    }
    this.service.createPersona(this.persona).subscribe({
      next: (data) => {
        alert('Se Agrego con Exito...!!!');
        this.router.navigate(['login']);
      },
      error: (error) => {
        alert('Error ');
        console.log('Error: ', error);
      },
    });
  }
}
