import { Component } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { NgFor } from '@angular/common';
import { Movie } from '../Models/movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieItemComponent, NgFor],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie [] = [{
    title: 'Moana', year: 2015, description: 'Aventura' },
    {title: 'Moana 2', year: 2024, description: 'Aventura'},
    {title: 'Toy Story', year: 2010, description: 'Aventura'},
    {title: 'Cars', year: 2011, description: 'Aventura'},
    {title: 'Frozen', year: 2014, description: 'Aventura'}
  ]

  selectedMovie: string | null = null;
  
  onMovieSelected (movieTitle: string): void {
    this.selectedMovie = movieTitle
  }

}
