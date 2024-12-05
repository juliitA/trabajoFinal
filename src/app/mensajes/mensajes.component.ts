import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent {

  mensaje1: string = "Primer mensaje";
  mensaje2: string = "Segundo mensaje"
  mostrarMensaje: boolean = false;

  toggleMensaje(): void {
    this.mostrarMensaje = !this.mostrarMensaje;
  }
}
