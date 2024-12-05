import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  Datos:  {nombre: string; edad: number; mascotas: number; localidad: string} = {
  nombre: 'Julia Aguaya',
  edad: 22,
  mascotas: 2,
  localidad: 'Rosario'
  };
}
