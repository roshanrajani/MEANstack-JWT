import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() ratingVal : number;

  @Output() ratingEvent : EventEmitter<string> = new EventEmitter();

  ratingArr : any = [];

  constructor() { }

  ngOnInit() {
   this.ratingArr = Array(Math.round(this.ratingVal)).fill(Math.round(this.ratingVal));
  }

  ratingClickFn(){
    this.ratingEvent.emit('Rating = '+this.ratingVal);
  }
}
