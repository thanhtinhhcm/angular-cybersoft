import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      account: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  // login(account: string, password: string): void {
  //   const objLogin = {
  //     taiKhoan: account,
  //     matKhau: password
  //   }
  //   this.accountService.login(objLogin).subscribe((res) => {
  //     if (res) {
  //       console.log(res);
  //       alert('Login successfully!')
  //     }
  //   })
  // }

  login(form: FormGroup): void {
    console.log(form);
    const objLogin = {
      taiKhoan: form.value.account,
      matKhau: form.value.password
    }
    // const objLogin = {...form.value}
    this.accountService.login(objLogin).subscribe((res) => {
      if (res) {
        console.log(res);
        alert('Login successfully!')
      }
    })

  }

  get account(): AbstractControl | null {
    return this.loginForm.get('account');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

}
