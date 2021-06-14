import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  title = 'lOpFe62';
  ngay = new Date();
  giaTien = 200000000;

  constructor() { }

  ngOnInit(): void {
  }



}
