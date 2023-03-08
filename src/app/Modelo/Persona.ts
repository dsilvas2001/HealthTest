export class Persona {
  id:String;
  

  
  nombre?: String;
  apellido?: String;
  email?: String;
  name?: String;
  username?: String;
  password?: String;
  tipousuario?: String;

  contadorusuario: String;

    //tests
    idtest: String;
    pregunta1: String; pregunta2: String; pregunta3: String; pregunta4: String;
    pregunta5: String; pregunta6: String; pregunta7: String; pregunta8: String;
    pregunta9: String; pregunta10: String; pregunta11: String; pregunta12: String;
    opcion1: String; opcion2: String; opcion3: String; opcion4: String;
    opcion5: String; opcion6: String; opcion7: String; opcion8: String;
    opcion9: String; opcion10: String; opcion11: String; opcion12: String;
    usuario: String;
    tipotest: String;


  constructor() {
    this.id = "";
    this.nombre = "";
    this.apellido = "";
    this.email = "";
    this.name = "";
    this.username = "";
    this.password = "";
    this.tipousuario = "";
    this.contadorusuario = "";

  }


  
}
export interface LoginResponse {
  user: Persona;
  token: string;
}
