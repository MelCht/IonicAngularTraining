import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from "./user-list.component";
import {RouterModule} from "@angular/router";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([])
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
