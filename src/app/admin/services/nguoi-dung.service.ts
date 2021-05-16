import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private httpClient: HttpClient) { }

  getDataDanhSachNguoiDung(): Observable<any>{
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01';
    const listNguoiDung = this.httpClient.get(api).pipe(tap());
    return listNguoiDung;
  }
}
