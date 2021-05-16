import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MovieService } from 'src/app/client/services/movie.service';
import { ItemMovieComponent } from '../item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  @ViewChildren(ItemMovieComponent) itemMovieTagList!: QueryList<ItemMovieComponent>

  listMovie: any[] = [];

  listLikeMovie = [
    {
      id: '1',
      name: 'Bo Gia',
      totalLike: 0
    },
    {
      id: '2',
      name: 'Avatar 2',
      totalLike: 0
    },
    {
      id: '3',
      name: 'King vs Godzilla 2',
      totalLike: 0
    },
    {
      id: '4',
      name: 'Angry Bird',
      totalLike: 0
    },
    {
      id: '5',
      name: 'Trang Ti',
      totalLike: 0
    },
  ]
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // this.listMovie = this.movieService.listFilm;
  }

  invokeActionChild(eventvalue: any): void {
    // eventvalue.totalLike += 1;
    this.listLikeMovie.forEach(item => {
      if (item.id === eventvalue.id) {
        item.totalLike++;
      }
    })
  }

  demoViewChildren(): void {
    this.itemMovieTagList.map(item => {
      item.film.detail = 'view children'
    });
  }

}
