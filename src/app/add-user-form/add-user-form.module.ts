import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddUserFormComponent} from "./add-user-form.component";
import {IonicModule} from "@ionic/angular";
import {RouterLink, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddUserFormComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [
    AddUserFormComponent
  ]
})
export class AddUserFormModule { }
