import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';
import Swal from 'sweetalert2';

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
    // const confirm = window.confirm('Are you sure?')

    // if (confirm) this.taskList.splice(event, 1)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1b7561',
      cancelButtonColor: '#a52a2a',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskList.splice(event, 1)
        this.setLocalStorage()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your task is safe',
          'info',
        )
      }
    })

  }

  public setEmitItemTaskList(event: string) {

    this.taskList.push({
      task: event,
      checked: false
    })
  }

  public deleteAll() {
    // const confirm = window.confirm('Are you sure?')

    // if (confirm) this.taskList = []
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1b7561',
      cancelButtonColor: '#a52a2a',
      confirmButtonText: 'Yes, delete them!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskList = []
        this.setLocalStorage()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your list is safe',
          'info',
        )
      }
    })
  }

  public validationInput(event: string, index: number) {
    // if (!event.length) {
    //   const confirm = window.confirm('Would rather delete this task?')

    //   if (confirm) this.deleteTask(index)
    // }

    if (!event.length) {
      Swal.fire({
        title: 'Would you rather delete this task?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1b7561',
        cancelButtonColor: '#a52a2a',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.taskList.splice(index, 1)
        this.setLocalStorage()
        }
      })
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
  }
}
