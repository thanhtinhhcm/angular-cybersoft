import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThongTinNguoiDungService {

  constructor(private httpClient: HttpClient) { }

  getDataNguoiDung(data: any): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan';
    const thongTin = this.httpClient.post(api, data).pipe(tap(), catchError(err => {
      return this.handleErr(err);
    }));
    return thongTin;
  }

  handleErr(error: any){
    switch (error.status) {
      case 500:
        alert(error.error);
        break;
    }

    return throwError(error);
  }
}
