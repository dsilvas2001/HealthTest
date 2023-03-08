import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-ansiedad',
  templateUrl: './ansiedad.component.html',
  styleUrls: ['./ansiedad.component.css'],
})
export class AnsiedadComponent implements OnInit{
  personas: Persona[] = [];

  persona: Persona= new Persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  


  GuardarTest() {
    this.persona.tipotest="Test de Ansiedad";
    this.persona.pregunta1="1.- Entumecimiento u hormigueo*:";this.persona.pregunta2="2.- Sensación de calor*:";
    this.persona.pregunta3="3.- Debilidad en las piernas*:";this.persona.pregunta4="4.- Incapacidad para relajarte*:";
    this.persona.pregunta5="5.- Miedo a que ocurra lo peor*:";this.persona.pregunta6="6.- Mareo o aturdimiento*:";
    this.persona.pregunta7="7.- Palpitaciones o corazón latiendo con rapidez*:";this.persona.pregunta8="8.- Inestabilidad*:";
    this.persona.pregunta9="9.- Terror o miedo*:";this.persona.pregunta10="10.- Sentir nervios*:";
    this.persona.pregunta11="11.- Sentimiento de asfixia*:";this.persona.pregunta12="12.- Manos temblorosas*:";
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas Agregar el Test",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si , Guardalo",
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.createTest(this.persona).subscribe((dato) => {
          this.personas = this.personas.filter((p) => p !== this.persona);
          this.router.navigate(["ansiedad"]);
          Swal.fire(
            "Test Agregado",
            "El Test ha sido Agregado con exito",
            'success'
          )
        });
      }
    })
  }



  
}
