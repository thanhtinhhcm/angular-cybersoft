import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('registerForm') registerFormTag: any;

  regexEmail = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    console.log(this.registerFormTag)
  }

  ngAfterViewInit(): void {
    console.log(this.registerFormTag)
  }

  ngOnDestroy(): void{

  }

  // signup(username: string, password: string, email: string, soDT: string, hoTen: string){
  //   const objSignup = {
  //     taiKhoan: username,
  //     matKhau: password,
  //     email: email,
  //     soDT: soDT,
  //     maNhom: "GP01",
  //     maLoaiNguoiDung: "KhachHang",
  //     hoTen: hoTen
  //   }
  //   this.signupService.signup(objSignup).subscribe((res) => {
  //     if(res){
  //       console.log(res);
  //       alert('Signup successfully!');
  //     }
  //   })
  // }

  signUp(form: any): void {
    const { value } = form;
    const objSignup = {
      taiKhoan: value.account,
      matKhau: value.password,
      email: value.email,
      soDT: value.soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: value.hoTen
    }
    this.signupService.signup(objSignup).subscribe((res) => {
      if (res) {
        alert('Signup successfully!!!')
      }
    })
  }

  isSubmittedForm(): boolean {
    return this.registerFormTag.submitted
  }

}
