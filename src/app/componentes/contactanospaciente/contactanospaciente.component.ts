import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-contactanospaciente',
  templateUrl: './contactanospaciente.component.html',
  styleUrls: ['./contactanospaciente.component.css']
})
export class ContactanospacienteComponent {
  constructor(private _CargarScriptsuser: CargarScriptsService){
    _CargarScriptsuser.popuptest(["popup"]);
    _CargarScriptsuser.darkperfiluser(["darkperfiluser"]);
    _CargarScriptsuser.Webfont();
    _CargarScriptsuser.Email();
    _CargarScriptsuser.linkemail(["linkemail"]);
    _CargarScriptsuser.Emailcontact(["scriptcontactanos"]);

    this.cargarestilo();

   
  }

  ngOnInit() { 
  }
  cargarestilo(){
    let node = document.createElement('link');
    node.href = "https://unicons.iconscout.com/release/v4.0.0/css/line.css";//Change to your js file
    node.type = 'text/css';
    node.rel="stylesheet"
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}