import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';


@Component({
  selector: 'app-paginapsicologo',
  templateUrl: './paginapsicologo.component.html',
  styleUrls: ['./paginapsicologo.component.css']
})
export class PaginapsicologoComponent {
  constructor(private _CargarScripts: CargarScriptsService){
    _CargarScripts.paginapsicologo(["menupsicologo"]);
  }
}
