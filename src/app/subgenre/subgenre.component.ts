import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subgenre',
  templateUrl: './subgenre.component.html',
  styleUrls: ['./subgenre.component.scss']
})
export class SubgenreComponent  {

  subgenres = ['Horror','Action','Drama','History','Comedy','Thriller','Adventures','Fantasy'];
  @Output() addSubgenre = new EventEmitter();
  @Output() saveSubgenre = new EventEmitter();
  constructor() { }


  getGenre(event: any) {
    this.saveSubgenre.emit(event.target.innerText);
  }
  addNewSubgenre() {
    this.addSubgenre.emit(true);
  }
}
