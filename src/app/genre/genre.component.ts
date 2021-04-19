import { Component, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent {
  @Input() genres;

  @Output() saveGenre = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getGenre(event: any) {
    this.saveGenre.emit(event.target.innerText);
  }
}
