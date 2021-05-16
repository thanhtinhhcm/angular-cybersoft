import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RapService {

  constructor(private httpClient: HttpClient) { }

  getDataRapPhim(): Observable<any>{
    const api="https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
    const listRap = this.httpClient.get(api).pipe(tap());
    return listRap;
  }
}
