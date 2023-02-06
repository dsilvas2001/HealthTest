import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';


@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css']
})
export class PerfiluserComponent {

  constructor(private _CargarScriptsuser: CargarScriptsService){
    _CargarScriptsuser.popuptest(["popup"]);
   
   
   
  }

  ngOnInit() { 
  }
}
