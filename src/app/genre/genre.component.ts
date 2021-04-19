import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent {
  genres = ['Horror','Action','Drama','History','Comedy','Thriller','Adventures','Fantasy'];

  @Output() saveGenre = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getGenre(event: any) {
    this.saveGenre.emit(event.target.innerText);
  }
}
