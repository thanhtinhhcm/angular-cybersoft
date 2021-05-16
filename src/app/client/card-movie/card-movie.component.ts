import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(){
    this.router.navigate(['/client/detail-movie', this.movie.maPhim])
  }

}
