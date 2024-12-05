import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  items = [
    {nombre: 'Pablo', edad: 23, profesion: 'Cocinero', pais: 'Argentina'},
    {nombre: 'Ana', edad: 32, profesion: 'Diseñadora', pais: 'Chile'},
    {nombre: 'Juan', edad: 29, profesion: 'Arquitecto', pais: 'Mexico'},
    {nombre: 'Maria', edad: 37, profesion: 'Abogada', pais: 'Colombia'}
  ];
}
