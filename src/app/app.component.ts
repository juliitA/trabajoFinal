import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MensajesComponent } from "./mensajes/mensajes.component";
import { DatosComponent } from "./datos/datos.component";
import { PersonasComponent } from "./personas/personas.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieItemComponent } from "./movie-item/movie-item.component";
import { SearchBarComponent } from './search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MensajesComponent, DatosComponent, PersonasComponent, HeaderComponent, FooterComponent, MovieListComponent, MovieItemComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
