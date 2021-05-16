// import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // listFilm = [
  //   {
  //     id: '1',
  //     name: 'Bo Gia',
  //     price: '50000',
  //     detail: 'test detail',
  //     imgUrl: '/assets/images/bogia.jpg',
  //   },
  //   {
  //     id: '2',
  //     name: 'Avatar 2',
  //     price: '50000',
  //     detail: 'test detail',
  //     imgUrl: 'assets/images/avatar.jpg',
  //     // totalLike: 0
  //   },
  //   {
  //     id: '3',
  //     name: 'King vs Godzilla 2',
  //     price: '50000',
  //     detail: 'test detail',
  //     imgUrl: '/assets/images/godzilla-dai-chien-kong.jpg',
  //     // totalLike: 0
  //   },
  //   {
  //     id: '4',
  //     name: 'Angry Bird',
  //     price: '50000',
  //     detail: 'test detail',
  //     imgUrl: '/assets/images/angrybird.jpeg',
  //     // totalLike: 0
  //   },
  //   {
  //     id: '5',
  //     name: 'Trang Ti',
  //     price: '50000',
  //     detail: 'test detail',
  //     imgUrl: '/assets/images/trang_ty.jpg',
  //     // totalLike: 0
  //   },
  // ]
  constructor(private httpClient: HttpClient) { }
  // , private keyValue: KeyValuePipe
  // getDataMovies(): Observable<any> {
  //   const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
  //   // return this.httpClient.get(api).pipe(map(val => this.keyValue.transform(val.tenPhim))).subscribe();
  //   const listFilm = this.httpClient.get(api).pipe(tap())
  //   return listFilm;
  // }

  getDataMovies(): Observable<ObjPhim[]> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02';
    return this.httpClient.get<ObjPhim[]>(api).pipe(map((res: ObjPhim[]) => {
      return res.map((item) => {
        item.tenPhim = item.tenPhim + 'abc';
        return item;
      })
    }));
  }

  getDetailMovie(idMovie: any): Observable<any>{
    const api = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`;
    return this.httpClient.get(api).pipe(tap());
  }

}

export interface ObjPhim {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: "GP01";
  ngayKhoiChieu: string;
  danhGia: number;
}
