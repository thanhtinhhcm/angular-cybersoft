// import { KeyValuePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { ProxyService } from 'src/app/provider/services/proxy/proxy.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private data = new BehaviorSubject({});
  public movieModal = this.data.asObservable();
  constructor(private httpClient: HttpClient, private proxy: ProxyService) { }
  // , private keyValue: KeyValuePipe
  // getDataMovies(): Observable<any> {
  //   const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
  //   // return this.httpClient.get(api).pipe(map(val => this.keyValue.transform(val.tenPhim))).subscribe();
  //   const listFilm = this.httpClient.get(api).pipe(tap())
  //   return listFilm;
  // }

  apiUrl = environment.apiUrl + '/QuanLyPhim';

  getDataMovies(): Observable<ObjPhim[]> {
    const api = this.apiUrl + '/LayDanhSachPhim?maNhom=GP02';
    return this.proxy.get(api);
  }

  getDetailMovie(idMovie: any): Observable<any>{
    const api = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`;
    return this.httpClient.get(api).pipe(tap());
  }

  changeMovieDataModal(movie: any): void {
    this.data.next(movie);
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
