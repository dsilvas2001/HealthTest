import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Modelo/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  Url = 'http://localhost:8080/api/v1/personas';
  UrlLogin ='http://localhost:8080/user/';

  loginUser(persona: Persona):Observable<object>{
    console.log(persona)
    return this.http.post(`${this.Url}`,persona);
  }
  getPersonas():Observable<any>{
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona: Persona): Observable<any>{
    return this.http.post<Persona>(this.Url, persona);
  }
  getPersonaId(id:number):Observable<any>{
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona):Observable<any>{
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }

  deletePersona(persona:Persona):Observable<any>{
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }

  //Metodos Nuevos para implementar las Opciones mejores
  elmininarPersona(id: number):Observable<object>{
    return this.http.delete(`${this.Url}/${id}`)
  }

  obtenerPersonaPorId(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.Url}/${id}`);
  }

  actualizarPersona(id:number, persona: Persona) : Observable<object>{
    return this.http.put(`${this.Url}/${id}` ,persona);
  }

  obtenerListaDePersona():Observable<Persona[]>{
   return this.http.get<Persona[]>(`${this.Url}`);
  }

  registrarPersona(persona:Persona):Observable<object>{
    return this.http.post(`${this.Url}`,persona);
  }
}
