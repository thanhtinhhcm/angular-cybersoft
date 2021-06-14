import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {



  constructor(private movieService: MovieService) {
  }

  ngOnInit() {

  }



  closeTrailer() {
    // let player = new YT.Player()
  }

}

