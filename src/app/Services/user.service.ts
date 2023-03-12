import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';
import { LoginResponse } from './login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 // Url = 'http://localhost:8080/authenticate';

 Url = 'https://backendhealthtest-production.up.railway.app/authenticate';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  /*PATH_OF_API = 'http://localhost:8080';*/

  PATH_OF_API = 'https://backendhealthtest-production.up.railway.app';
  constructor(private http: HttpClient) {}

  loginUser(persona: Persona): Observable<object> {
    console.log(persona);
    return this.http.post(`${this.Url}`, persona, {
      headers: this.requestHeader,
    });
  }

  public login(persona: Persona) {
    //   {
    //     "userName": "pruebatoken",
    //     "userPassword": "123"
    // }

    console.log('UserName: ', persona.username);
    console.log('Password: ', persona.password);
    return this.http.post<LoginResponse>(
      this.PATH_OF_API + '/authenticate',
      {
        userName: persona.username,
        userPassword: persona.password,
      }
    );
  }

  guardarSesion(login: LoginResponse): void {
    localStorage.setItem('sesion_login', JSON.stringify(login));
  }

  get sesion(): LoginResponse | null {
    let sesion = localStorage.getItem('sesion_login');
    if (sesion) { 
      return JSON.parse(sesion);
    }
    return null;
  }

  cerrarSesion(): void {
    localStorage.clear();
  }
}
