import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss']
})
export class OneWayComponent implements OnInit {

  name='FE62';

  constructor() { }

  ngOnInit(): void {
  }

  callToAction(): void {
    console.log(this.name);
  }

}
