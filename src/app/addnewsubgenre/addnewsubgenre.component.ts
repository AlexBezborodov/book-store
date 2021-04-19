import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addnewsubgenre',
  templateUrl: './addnewsubgenre.component.html',
  styleUrls: ['./addnewsubgenre.component.scss']
})
export class AddnewsubgenreComponent  {
  value: string = "";
  description: string = "";
  isChecked:boolean = false;
  isDisabled:boolean = true;
  @Output() newSubgenre = new EventEmitter();
  @Output() disabledButton = new EventEmitter();
  constructor() { }
  onInput(event: any) {
    this.value = event.target.value;
    if(this.value.trim()) {
      this.disabledButton.emit(false);
      this.isDisabled = false;
    }else {
      this.disabledButton.emit(true);
      this.isDisabled = true;
    }
  }
  onDescription(event: any) {
    this.description = event.target.value;
  }
  onCheck(event:any) {
    this.isChecked = event.target.checked;
  }
  saveNewSubgenre() {
    this.newSubgenre.emit([this.value, this.description])
  }


}
