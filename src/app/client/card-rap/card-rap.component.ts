import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-rap',
  templateUrl: './card-rap.component.html',
  styleUrls: ['./card-rap.component.scss']
})
export class CardRapComponent implements OnInit {

  @Input() rap: any;
  constructor() { }

  ngOnInit(): void {
  }

}
