import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  detailMovie: any
  isLoading = true;
  params: any;
  id!: any;
  constructor(private activatedRoute: ActivatedRoute, private chiTietPhim: MovieService) { }

  // ngOnInit(): void {
  //   let idMovie = this.activatedRoute.snapshot.paramMap.get('idMovie') as string;
  //   this.getParamsFromUrl();
  //   if (idMovie) {
  //     this.getDataMovie(idMovie);
  //   } else {
  //     idMovie = this.params.maPhim;
  //     this.getDataMovie(idMovie);
  //   }
  // }

  // getDataMovie(idMovie: string) {
  //   this.chiTietPhim.getDetailMovie(idMovie).subscribe((res) => {
  //     this.detailMovie = res
  //     this.isLoading = false
  //   })
  // }

  // getParamsFromUrl() {
  //   this.activatedRoute.queryParams.subscribe((data: any) => {
  //     this.params = data;
  //   })
  // }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('idMovie') as string;
    if (!this.id) {
      this.getParamsFromUrl();
      this.getDataMovie(this.id);
    } else {
      this.getDataMovie(this.id);
    }
  }

  getDataMovie(idMovie: string) {
    this.chiTietPhim.getDetailMovie(idMovie).subscribe((res) => {
      this.detailMovie = res;
      this.isLoading = false;
    })
  }

  getParamsFromUrl() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.id = data.maPhim;
    })
  }

}
