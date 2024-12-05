import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PersonasDataService } from '../personas-data.service';
import { Personas } from '../personas';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  items: Personas[];

  constructor(private personasDataService: PersonasDataService) {
    this.items = this.personasDataService.getPersonas();
  }
}
