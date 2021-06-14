import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // userInfos: any = {};

  constructor(private router: Router){}
  canActivate(): boolean {
    // let userInfo: any = localStorage.getItem('accountFE62')
    //   ? localStorage.getItem('accountFE62')
    //   : '';
    //   if (userInfo != '') {
    //     this.userInfos = JSON.parse(userInfo!);
    //   }
    //   if (this.userInfos.maLoaiNguoiDung === 'QuanTri') {
    //     return true
    //   } else return false;

    const account = JSON.parse(localStorage.getItem('accountFE62') as string);

    if(account && account.maLoaiNguoiDung === "QuanTri"){
      return true
    }
    this.router.navigate(['login']);
    return false
  }


}
