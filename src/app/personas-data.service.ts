import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasDataService {
  items = [
    {nombre: 'Pablo', edad: 23, profesion: 'Cocinero', pais: 'Argentina'},
    {nombre: 'Ana', edad: 32, profesion: 'Diseñadora', pais: 'Chile'},
    {nombre: 'Juan', edad: 29, profesion: 'Arquitecto', pais: 'Mexico'},
    {nombre: 'Maria', edad: 37, profesion: 'Abogada', pais: 'Colombia'}
  ];

  constructor() { }
  getPersonas(){
    return this.items;
  }
}
