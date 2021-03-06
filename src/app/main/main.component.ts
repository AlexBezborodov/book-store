import { Component, OnInit } from '@angular/core';
import {genres} from './../MockData/data.json';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  {
  data = genres;
  checked:boolean = false;
  isComplited:boolean = false;
  genre:string = "";
  subgenre:string = "";
  newSubgenre:string = "";
  genreDisabled:boolean = true;
  subgenreDisabled:boolean = true;
  addNewSubgenre:boolean = true;
  lastStep:boolean = true;
  bookinfo = [];
  consolidationBookInfo = [];
  modal:boolean = false;


  constructor() {}
  addSubgenre(event:boolean) {
    this.checked = event;
  }
  closeForm() {
    this.checked = false;
    this.subgenreDisabled = true;

  }
  saveGenre(event: string) {
    this.genre = event;
      this.genreDisabled = false;
  }
  saveSubgenre(event: string) {
    this.subgenre = event;
    this.subgenreDisabled = false;
    this.checked = false;
  }
  toPrevStep() {
    this.genreDisabled = true;
    this.subgenreDisabled = true;
    this.modal = false;
  }
  saveNewSubgenre(event:any) {
    this.newSubgenre = event;
  }

  sendReqest() {
    this.consolidationBookInfo =[this.bookinfo,{genre:this.genre, subgenre: this.subgenre}];
    this.modal = true;
  }
}
