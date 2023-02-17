import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }


  carga(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/scriplogin.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  tipouser(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/selectipouser.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  //iconos
  Webfont() {

    let node = document.createElement('script');
    node.src = "https://kit.fontawesome.com/18096001b9.js";//Change to your js file
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  Email() {
    let node = document.createElement('script');
    node.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";//Change to your js file
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  linkemail(archivos: string[]) {
    for (let archivo of archivos) {
    let node = document.createElement('script');
    node.src = "../../../assets/Js/linkemail.js";//Change to your js file
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  Emailcontact(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/scriptcontactanos.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  Pagadmin(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/scriptpagadmin.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  Pagadminreportest(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/scripreportestadmin.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  darkperfiluser(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/darkperfiluser.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  Videoprincipal(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/video.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  /*Popup del perfil*/
  popuptest(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/popup.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  paginapsicologo(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/menupsicologo.js";//Change to your js file
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  /*tipo de test*/
  tiptest(archivos: string[]) {
    for (let archivo of archivos) {
      let node = document.createElement('script');
      node.src = "../../../assets/Js/tipostest.js";//Change to your js file
      node.type = 'typing-text';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  /*tipode test dinamica*/ 
  linktest() {
    let node = document.createElement('script');
    node.src = "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js";//Change to your js file
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  




 


}
