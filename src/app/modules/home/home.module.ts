import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { InputAddItemsComponent } from './components/input-add-items/input-add-items.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    InputAddItemsComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
