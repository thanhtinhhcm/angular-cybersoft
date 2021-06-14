import { Component, OnInit } from '@angular/core';
import { MovieService } from '@Client-service/movie.service';
import { Observable } from 'rxjs';

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
      console.log(res)
    })
  }

}
