import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-paginapsicologovisualizarpaciente',
  templateUrl: './paginapsicologovisualizarpaciente.component.html',
  styleUrls: ['./paginapsicologovisualizarpaciente.component.css']
})
export class PaginapsicologovisualizarpacienteComponent {
  constructor(private _CargarScripts: CargarScriptsService){
    _CargarScripts.paginapsicologo(["menupsicologo"]);
  }
}
