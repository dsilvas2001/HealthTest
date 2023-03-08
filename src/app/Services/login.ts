import {Persona} from '../Modelo/Persona';

export class LoginResponse {
    user: Persona;
    jwtToken: string;

    constructor() {
        this.user = new Persona();
        this.jwtToken = "";
    }
}



