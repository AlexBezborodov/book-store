import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.scss']
})
export class AddinfoComponent implements OnInit {
  @Output() bookInfo = new EventEmitter();
  @Output() validation = new EventEmitter();
  @Input() modal: boolean;
  newBook:any = {
    title: '',
    author: '',
    isbn: null,
    publisher: '',
    date:'',
    pages: '',
    format: '',
    edition: '',
    editionLanguage: '',
    description: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  addinfo(event:any, name:string) {
    const data = event.target.value;
    switch(name) {
      case 'title':
        this.newBook.title = data;
      break;
      case 'author':
        this.newBook.author = data;
      break;
      case 'isbn':
        this.newBook.isbn = data;
      break;
      case 'publisher':
        this.newBook.publisher = data;
      break;
      case 'date':
        this.newBook.date = event.value;
      break;
      case 'pages':
        this.newBook.pages = data;
      break;
      case 'format':
        this.newBook.format = data;
      break;
      case 'edition':
        this.newBook.edition = data;
      break;
      case 'lang':
        this.newBook.editionLanguage = data;
      break;
      case 'desc':
        this.newBook.description = data;
      break;
    }
    this.onValidate();
    this.clearBookInfo();
  }


  onValidate() {
    if(this.newBook.author.trim() && this.newBook.title.length > 0 && this.newBook.isbn.trim()) {
      this.validation.emit(false);
      this.bookInfo.emit(this.newBook);
    } else {
      this.validation.emit(true);
    }
  }
  clearBookInfo() {
    if(this.modal === true) {
      this.newBook = {
        title: '',
        author: '',
        isbn: null,
        publisher: '',
        date:'',
        pages: '',
        format: '',
        edition: '',
        editionLanguage: '',
        description: ''
      };
    }
  }
}
