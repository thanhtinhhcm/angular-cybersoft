import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  constructor(private httpClient: HttpClient) { }

  get(api: string): Observable<any> {
    return this.httpClient.get(api).pipe(tap(), catchError(err => {
      return this.handleErr(err);
    }));
  }

  post(api: string, data: any): Observable<any> {
    return this.httpClient.post(api, data).pipe(tap(), catchError(err => {
      return this.handleErr(err);
    }));
  }

  handleErr(error: any) {
    switch (error.status) {
      case 500:
        alert(error.error);
        break;
    }

    return throwError(error);
  }
}
