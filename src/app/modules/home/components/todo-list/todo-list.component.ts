import { Component } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {
  public taskList: Array<TaskList> = [
    {
      task: 'Task 1',
      checked: false
    },
    {
      task: 'Task 2',
      checked: true
    },
    {
      task: 'Task 3',
      checked: false
    }
  ]

  public addTask(task: string) {
    this.taskList.push({
      task: task,
      checked: false
    })
  }

  public deleteTask(event: number) {
    const confirm = window.confirm('Are you sure?')

    if (confirm) this.taskList.splice(event, 1)

  }

  public deleteAll() {
    const confirm = window.confirm('Are you sure?')

    if (confirm) this.taskList = []
  }

}
