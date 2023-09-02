import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { InputAddItemsComponent } from './components/input-add-items/input-add-items.component';
import { ListComponent } from './components/list/list.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    InputAddItemsComponent,
    ListComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
