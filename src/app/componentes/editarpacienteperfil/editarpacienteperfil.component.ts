import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-editarpacienteperfil',
  templateUrl: './editarpacienteperfil.component.html',
  styleUrls: ['./editarpacienteperfil.component.css']
})
export class EditarpacienteperfilComponent {
  persona :Persona=new Persona();

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
    this.cargarIcons();
    this.Editar();
}

Editar(){
  let id = localStorage.getItem("id");
  if (id !== null && id !== undefined) {
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      console.log('Objecto persona: ', data);
      this.persona=data;
    })
  }
 /* this.service.getPersonaId(+id)
  .subscribe(data=>{
    console.log('Objecto persona: ', data);
    this.persona=data;
  })*/
}



ActualizarPersona(persona: Persona) {
  Swal.fire({
    title: '¿Estas seguro?',
    text: "Confirma si deseas Actualizar al  " + persona.tipousuario,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si , Actualizalo!'
  }).then((result) => {
    if (result.isConfirmed) {
      if (persona.tipousuario == 'Paciente' ) {
        this.service.updatePersona(persona).subscribe((dato) => {
          Swal.fire(
            'Usuario Actualizado!',
            'El Usuario ha sido Actualizado con exito',
            'success'
          )
        });
      }
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
}
