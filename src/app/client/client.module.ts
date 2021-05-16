import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { ListMovieComponent } from '../lesson/day-three/list-movie/list-movie.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { ListRapComponent } from './list-rap/list-rap.component';
import { CardRapComponent } from './card-rap/card-rap.component';
import { PipeModule } from '../pipe/pipe.module';
import { ThongTinNguoiDungComponent } from './thong-tin-nguoi-dung/thong-tin-nguoi-dung.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

const routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'movies',
        component: ListFilmComponent
      },
      {
        path: 'cum-rap',
        component: ListRapComponent
      },
      {
        path: 'thong-tin-nguoi-dung',
        component: ThongTinNguoiDungComponent
      },
      {
        path: 'detail-movie',
        component: DetailMovieComponent
      },
      {
        path: 'detail-movie/:idMovie',
        component: DetailMovieComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ClientComponent,
    AboutUsComponent,
    ListFilmComponent,
    CardMovieComponent,
    ListRapComponent,
    CardRapComponent,
    ThongTinNguoiDungComponent,
    UserDetailComponent,
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PipeModule
  ], exports: [ClientComponent]
})
export class ClientModule { }
