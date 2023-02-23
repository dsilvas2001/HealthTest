import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-mostrarpsicologo',
  templateUrl: './mostrarpsicologo.component.html',
  styleUrls: ['./mostrarpsicologo.component.css']
})
export class MostrarpsicologoComponent {



  model: any = {};
  getData: boolean;
  personas: Persona[] = [];
  persona: Persona = new Persona();

  constructor(
    private _CargarScripts: CargarScriptsService,
    public formulario: FormBuilder,
    private router: Router,
    private service: ServiceService
  ) {
    _CargarScripts.Pagadmin(["scriptpagadmin"]);
    _CargarScripts.Webfont();

    this.scrippagprincipal();
  }

  ngOnInit(){
    console.log('initializing');

    this.cargarIcons();
    this.listarpsicologo();


}
listarpsicologo(){
  this.service.getPsicologo().subscribe((data) => {
    console.log('Objecto persona: ', data);
    this.personas = data;
  });
}


Editar(persona: Persona): void {
  localStorage.setItem("id", persona.id.toString());
  this.router.navigate(["editarperfiles"]);
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
        Swal.fire(
          'Eliminado!',
          'El Psicólogo  ha sido eliminado.',
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
      this.listarpsicologo();

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
}
