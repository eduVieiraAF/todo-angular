import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  @Output() public emitItemTaskList = new EventEmitter();
  public addItemTaskList: string = '';

  public submitItemTaskList() {
    // console.log(this.addItemTaskList)
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList ) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }

}
