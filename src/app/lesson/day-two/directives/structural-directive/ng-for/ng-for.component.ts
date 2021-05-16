import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  studentList = [
    {
      name: 'Tinh',
      age: '21'
    },
    {
      name: 'Truong',
      age: '23'
    },
    {
      name: 'Hai',
      age: '21'
    },
    {
      name: 'Loc',
      age: '20'
    },
    {
      name: 'Huong',
      age: '21'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
