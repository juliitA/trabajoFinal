import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../Models/movie.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie! : Movie;
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie(){
    this.movieSelected.emit (this.movie.title)
  }
}
