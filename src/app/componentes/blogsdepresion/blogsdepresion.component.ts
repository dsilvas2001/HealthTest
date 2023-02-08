import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-blogsdepresion',
  templateUrl: './blogsdepresion.component.html',
  styleUrls: ['./blogsdepresion.component.css']
})
export class BlogsdepresionComponent {


  constructor(private _CargarScripts: CargarScriptsService){
    _CargarScripts.Webfont();

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
