import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie: any;

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  navigateTo(){
    this.router.navigate(['/client/detail-movie', this.movie.maPhim])
  }

  callDialog(){
    this.movieService.changeMovieDataModal(this.movie);
  }

}
