import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {

  // Input là truyền từ ParentComponent vào --> khi sử dụng dùng []
  @Input() film: any;
  @Input() listLike!: any[];
  // Output là truyền từ ChildComponent ra --> khi sử dụng dùng ()
  @Output() eventOutput = new EventEmitter();

  likeInListLike = 0;
  constructor() { }

  ngOnInit(): void {
  }

  like(): void {
    this.countLike();
    // this.eventOutput.emit(this.film);
  }

  countLike(): void {
    this.listLike.forEach(ele => {
      if(ele.id === this.film.id){
        ele.totalLike ++;
        this.likeInListLike = ele.totalLike;
      }
    })
  }

}
