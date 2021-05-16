import { Component, OnInit } from '@angular/core';
import { RapService } from '../services/rap.service';

@Component({
  selector: 'app-list-rap',
  templateUrl: './list-rap.component.html',
  styleUrls: ['./list-rap.component.scss']
})
export class ListRapComponent implements OnInit {

  listRap: any[] = [];
  constructor(private rapServices: RapService) { }

  ngOnInit(): void {
    this.rapServices.getDataRapPhim().subscribe((res) => {
      this.listRap = res;
    })
  }

}
