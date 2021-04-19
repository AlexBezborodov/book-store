import { Component, OnInit, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-book-added-window',
  templateUrl: './book-added-window.component.html',
  styleUrls: ['./book-added-window.component.scss']
})
export class BookAddedWindowComponent implements OnInit {
  @Output() modal = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  addnewBook() {
    this.modal.emit(false);
  }
}
