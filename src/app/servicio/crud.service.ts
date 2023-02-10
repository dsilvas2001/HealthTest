import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Usuario } from './Usuarios';
import {
  CollectionReference,
  DocumentData,
  collection,
} from '@firebase/firestore';

import { Firestore, collectionData, docData, addDoc } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  usuariosCollection: CollectionReference<DocumentData>;
  constructor(
    private readonly firestore: Firestore
  ) { 

    this.usuariosCollection = collection(this.firestore, 'usuarios');
    
    

    // colecciones
    collectionData(this.usuariosCollection, {
      idField: 'id',
    }).forEach((data) => {
      console.log(data)
    })
  }

  createUsuario(usuario: Usuario) {
    return addDoc(this.usuariosCollection, usuario)
  }

}
