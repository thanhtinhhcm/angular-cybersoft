import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
import { NguoiDungService } from '../../services/nguoi-dung.service';

@Component({
  selector: 'app-list-nguoi-dung',
  templateUrl: './list-nguoi-dung.component.html',
  styleUrls: ['./list-nguoi-dung.component.scss']
})
export class ListNguoiDungComponent implements OnInit {

  listNguoiDung: any[] = [];

  // dataNguoiDung = new MatTableDataSource(this.listNguoiDung);

  // displayedColumns: string[] = ['taiKhoan', 'matKhau', 'hoTen', 'email', 'soDT', 'maLoaiNguoiDung']
  constructor(private nguoiDungServices: NguoiDungService) { }

  ngOnInit(): void {
    this.nguoiDungServices.getDataDanhSachNguoiDung().subscribe((res) => {
      this.listNguoiDung = res;
    })
  }

}
