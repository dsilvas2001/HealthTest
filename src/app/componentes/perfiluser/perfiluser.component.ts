import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css']
})
export class PerfiluserComponent {

  constructor(private _CargarScriptsuser: CargarScriptsService,private router: Router){
    _CargarScriptsuser.popuptest(["popup"]);
    _CargarScriptsuser.darkperfiluser(["darkperfiluser"]);
    _CargarScriptsuser.Webfont();

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
