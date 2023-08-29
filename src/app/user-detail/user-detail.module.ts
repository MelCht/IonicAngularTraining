import { NgModule } from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {UserDetailComponent} from "./user-detail.component";
import {IonicModule} from "@ionic/angular";
import {RouterLink, RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([]),
    NgForOf,
    NgIf,
    RouterLink
  ],
  exports: [
    UserDetailComponent
  ]
})
export class UserDetailModule { }
