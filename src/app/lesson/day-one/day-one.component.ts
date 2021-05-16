import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/client/services/movie.service';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.scss']
})
export class DayOneComponent implements OnInit {

  listFilm: any[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.listFilm = this.movieService.listFilm;
    // console.log(this.listFilm)
  }

}
