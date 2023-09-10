import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements DoCheck {
ngDoCheck(): void {
  this.setLocalStorage()
}

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('taskList') || '[]')

  public deleteTask(event: number) {
    const confirm = window.confirm('Are you sure?')

    if (confirm) this.taskList.splice(event, 1)

  }

  public setEmitItemTaskList(event: string) {

    this.taskList.push({
      task: event,
      checked: false
    })
  }

public deleteAll() {
  const confirm = window.confirm('Are you sure?')

  if (confirm) this.taskList = []
}

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Would rather delete this task?')

      if (confirm) this.deleteTask(index)
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
  }
}
