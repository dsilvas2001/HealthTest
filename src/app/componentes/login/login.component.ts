import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _CargarScripts: CargarScriptsService){
    _CargarScripts.carga(["scriplogin"]);
    _CargarScripts.tipouser(["selectipouser"]);
   
  }
 
  ngOnInit(){
  }
  clickMe(){
  }
}
