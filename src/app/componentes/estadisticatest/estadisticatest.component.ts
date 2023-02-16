import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-estadisticatest',
  templateUrl: './estadisticatest.component.html',
  styleUrls: ['./estadisticatest.component.css']
})
export class EstadisticatestComponent {
  constructor(private _CargarScripts: CargarScriptsService){
    _CargarScripts.Pagadminreportest(["scripreportestadmin"]);

    _CargarScripts.Webfont();

    this.scrippagprincipal();

  }
  ngOnInit(){
    this.cargarIcons();

}
cargarIcons(){
  let node = document.createElement('link');
  node.href = "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css ";//Change to your js file
  node.type = 'text/css';
  node.rel="stylesheet"
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}
scrippagprincipal() {

  let node = document.createElement('script');
  node.src = "https://cdn.jsdelivr.net/npm/apexcharts";//Change to your js file
  node.type = 'text/javascript';
  node.async = true;
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}
}
