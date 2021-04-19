import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-subgenre',
  templateUrl: './subgenre.component.html',
  styleUrls: ['./subgenre.component.scss']
})
export class SubgenreComponent  {
  @Input() newSubgenre:any;
  // @Input() subgenres:any;
  subgenres = ['Horror','Action','Drama','History','Comedy','Thriller','Adventures','Fantasy'];
  @Output() addSubgenre = new EventEmitter();
  @Output() saveSubgenre = new EventEmitter();
  constructor() {

  }
  ngOnChanges() {
    if(this.newSubgenre !== ''){
      this.subgenres.push(this.newSubgenre);
    }
  }

  getGenre(event: any) {
    this.saveSubgenre.emit(event.target.innerText);
  }
  addNewSubgenre() {
    this.addSubgenre.emit(true);
  }
}
