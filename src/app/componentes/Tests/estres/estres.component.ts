import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-estres',
  templateUrl: './estres.component.html',
  styleUrls: ['./estres.component.css']
})
export class EstresComponent {
  personas: Persona[] = [];

  persona: Persona= new Persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  GuardarTest() {
    this.persona.tipotest="Test de Depresion";
    this.persona.pregunta1="1.- Mi futuro parece sin esperanza*:";this.persona.pregunta2="2.- Sin tratar de hacer dieta, he perdido o ganado peso*:";
    this.persona.pregunta3="3.- Me siento sin vida – – – más muerto que vivo*:";this.persona.pregunta4="4.- Mi sueño ha sido perturbado: duermo muy poco, duermo demasiado o duermo de forma interrumpida*:";
    this.persona.pregunta5="5.- Estoy agitado e inquieto la mayor parte del tiempo*:";this.persona.pregunta6="6.- Me siento fatigado*:";
    this.persona.pregunta7="7.- Me siento triste, melancólico e infeliz la mayor parte del tiempo*:";this.persona.pregunta8="8.- Paso tiempo pensando en cómo podría suicidarme*:";
    this.persona.pregunta9="9.- Me siento cautivo o atrapado*:";this.persona.pregunta10="10.- Hago las cosas lentamente*:";
    this.persona.pregunta11="11.- Me siento como un fracaso*:";this.persona.pregunta12="12.- He perdido interés en aspectos de la vida que solían ser importantes para mí*:";
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
          this.router.navigate(["estres"]);
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
