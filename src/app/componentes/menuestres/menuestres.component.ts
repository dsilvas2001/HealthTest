import { Component } from '@angular/core';

@Component({
  selector: 'app-menuestres',
  templateUrl: './menuestres.component.html',
  styleUrls: ['./menuestres.component.css']
})
export class MenuestresComponent {
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
