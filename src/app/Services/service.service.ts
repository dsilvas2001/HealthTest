import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../Modelo/Persona';
import { UserService } from './user.service'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http:HttpClient,
    private userService: UserService,
    ) { }


  /*Url = 'http://localhost:8080/api/v1/personas';
  Url2 = 'http://localhost:8080/api/v1/login';
  Url3= 'http://localhost:8080/api/v1/psicologo';
  Url4= 'http://localhost:8080/api/v1/admin';
  Url5= 'http://localhost:8080/api/v1/exportarPDF';
  Urltotalpaciente= 'http://localhost:8080/api/v1/contadortotalpaciente';

  Urltotalpsicologo= 'http://localhost:8080/api/v1/contadortotalpsicolo';

  Urltotaladmin= 'http://localhost:8080/api/v1/contadortotaladmin';

  Urlguardar = 'http://localhost:8080/api/v1/registerNewUser';
  Urltest = 'http://localhost:8080/api/v3/tests'; */


  Url = 'https://backendhealthtest-production.up.railway.app/api/v1/personas';
  Url2 = 'https://backendhealthtest-production.up.railway.app/api/v1/login';
  Url3= 'https://backendhealthtest-production.up.railway.app/api/v1/psicologo';
  Url4= 'https://backendhealthtest-production.up.railway.app/api/v1/admin';
  Url5= 'https://backendhealthtest-production.up.railway.app/api/v1/exportarPDF';
  Urltotalpaciente= 'https://backendhealthtest-production.up.railway.app/api/v1/contadortotalpaciente';

  Urltotalpsicologo= 'https://backendhealthtest-production.up.railway.app/api/v1/contadortotalpsicolo';

  Urltotaladmin= 'https://backendhealthtest-production.up.railway.app/api/v1/contadortotaladmin';

  Urlguardar = 'https://backendhealthtest-production.up.railway.app/api/v1/registerNewUser';
  Urltest = 'https://backendhealthtest-production.up.railway.app/api/v3/tests';

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );
  loginUser(persona: Persona):Observable<object>{
    console.log(persona)
    return this.http.post(`${this.Url2}`,persona);
  }

  createTest(persona:Persona):Observable<any>{
    return this.http.post<Persona>(this.Urltest,persona
      ,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
        })
      }
      );
  }
  
  getPersonaId(id:number):Observable<any>{
    return this.http.get<Persona>(this.Url+"/"+id
    , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    }
    
    );
  }



  loginUsuario(persona: Persona):Observable<object>{
    console.log(persona)
    return this.http.post(`${this.Url2}`,persona,{headers: this.requestHeader});
  }


  getPDF():Observable<any>{
    return this.http.get<Persona[]>(this.Url5
      
      , {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
        })
      }
      
      
      );
  }

  gettotalpaciente() : Observable<any> {
    
    console.log(this.userService.sesion?.jwtToken
      
      , {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
        })
      }
      
      
      );

    return this.http.get<Persona>(this.Urltotalpaciente, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    });
  }
  gettotalpsicologo():Observable<any>{
    return this.http.get<Persona>(this.Urltotalpsicologo, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    });
  }
  gettotaladmin():Observable<any>{
    return this.http.get<Persona>(this.Urltotaladmin
      , {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
        })
      }
      
      
      );
  }

 

  getPersonas():Observable<any>{
    return this.http.get<Persona[]>(this.Url
      
      , {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
        })
      }
      
      
      );
  }
  
  getPsicologo():Observable<any>{
    return this.http.get<Persona[]>(this.Url3
      
      , {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
        })
      }
      
      );
  }

  getAdmin():Observable<any>{
    return this.http.get<Persona[]>(this.Url4
      , {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
        })
      }
      );
  }
  createPersona(persona: Persona): Observable<any>{
    return this.http.post<Persona>(this.Urlguardar, persona);
  }
 



  updatePersona(persona:Persona):Observable<any>{
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona
    , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    }
    
    );
  }

  deletePersona(persona:Persona):Observable<any>{
    return this.http.delete<Persona>(this.Url+"/"+persona.id
    
    , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    }
    
    );
  }

  //Metodos Nuevos para implementar las Opciones mejores
  elmininarPersona(id: number):Observable<object>{
    return this.http.delete(`${this.Url}/${id}`
    , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    }
    
    
    )
  }

  obtenerPersonaPorId(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.Url}/${id}`
    
    , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    }
    );
  }

  actualizarPersona(id:number, persona: Persona) : Observable<object>{
    return this.http.put(`${this.Url}/${id}` ,persona
    , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    }
    
    );
  }

  obtenerListaDePersona():Observable<Persona[]>{
   return this.http.get<Persona[]>(`${this.Url}`
   , {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
    })
  }
   
   
   );
  }

  registrarPersona(persona:Persona):Observable<object>{
    return this.http.post(`${this.Url}`,persona
    , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userService.sesion?.jwtToken}`
      })
    }
    
    
    );
  }
}
