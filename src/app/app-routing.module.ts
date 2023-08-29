import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { AddUserFormComponent } from "./add-user-form/add-user-form.component";
import { UserListModule } from "./user-list/user-list.module";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailModule} from "./user-detail/user-detail.module";
import {AddUserFormModule} from "./add-user-form/add-user-form.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserListComponent,
        loadChildren: () => UserListModule, // Charger le module
      }
    ]
  },
  {
    path: 'user',
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        loadChildren: () => UserDetailModule,
      },
      {
        path: 'new',
        component: AddUserFormComponent,
        loadChildren: () => AddUserFormModule,
      }
    ]
  },
  {
    path: 'new',
    children: [
      {
        path: '',
        component: AddUserFormComponent,
        loadChildren: () => AddUserFormModule,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
