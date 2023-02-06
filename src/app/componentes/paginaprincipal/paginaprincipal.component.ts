import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent {

  
  constructor(private _CargarScripts: CargarScriptsService){
    _CargarScripts.Webfont();
    _CargarScripts.Email();
    _CargarScripts.linkemail(["linkemail"]);
    _CargarScripts.Emailcontact(["scriptcontactanos"]);
    _CargarScripts.Videoprincipal(["video"]);
  }
  ngOnInit(){
    this.cargarestilo();
}
cargarestilo(){
  let node = document.createElement('link');
  node.href = "https://assets.website-files.com/5fef5619b640934b33c2385e/css/portfolio-webflow-html-website-template.webflow.fb0c99d79.css";//Change to your js file
  node.type = 'text/css';
  node.rel="stylesheet"
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}

}
