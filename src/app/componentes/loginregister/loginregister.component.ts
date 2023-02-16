import { Component,OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { Usuario } from 'src/app/Modelo/Usuario';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/service.service';
@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit{

  model: any = {}
  getData: boolean;
  persona:Persona=new Persona();
  usuario:Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService) { }
  ngOnInit() {
  }
  userLogin2(){
    console.log(this.usuario)
    this.service.loginUser2(this.usuario).subscribe(data => {
      alert("Login Successfull")
    },error => alert("error de Autenticacion."))
  }
}
