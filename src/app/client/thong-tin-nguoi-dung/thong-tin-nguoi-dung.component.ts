import { Component, OnInit } from '@angular/core';
import { ThongTinNguoiDungService } from '../services/thong-tin-nguoi-dung.service';

@Component({
  selector: 'app-thong-tin-nguoi-dung',
  templateUrl: './thong-tin-nguoi-dung.component.html',
  styleUrls: ['./thong-tin-nguoi-dung.component.scss']
})
export class ThongTinNguoiDungComponent implements OnInit {

  thongTinNguoiDung: any[] = [];
  constructor(private thongTinService: ThongTinNguoiDungService) { }

  ngOnInit(): void {

  }
  layThongTin(thongTinNhan: string): void{
    const objThongTin = {
      taiKhoan: thongTinNhan
    }
    this.thongTinService.getDataNguoiDung(objThongTin).subscribe((res) => {
      if(res){
        // console.log(res);
        this.thongTinNguoiDung = res;
        console.log(this.thongTinNguoiDung)
      }
    })
  }

}
