import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  listFilm: any[] = [];
  constructor(private movieServices: MovieService) { }

  ngOnInit(): void {
    this.movieServices.getDataMovies().subscribe((res) => {
      this.listFilm = res;
    })
  }

}
