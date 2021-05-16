import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  login(data: any): Observable<any>{
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.httpClient.post(api, data).pipe(tap(), catchError(err => {
      return this.handleErr(err);
    }));
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
