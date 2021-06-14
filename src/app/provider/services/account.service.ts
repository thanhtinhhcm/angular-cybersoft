import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProxyService } from './proxy.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  api = environment.apiUrl + '/QuanLyNguoiDung';

  constructor(private httpClient: HttpClient, private proxy: ProxyService) { }

  login(data: any): Observable<any> {
    const api = this.api + '/DangNhap';
    return this.proxy.post(api, data)
    // return this.httpClient.post(api, data).pipe(tap(), catchError(err => {
    //   return this.handleErr(err);
    // }));
  }

}
