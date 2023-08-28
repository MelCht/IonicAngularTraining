import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { AddUserFormComponent } from "./add-user-form/add-user-form.component";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent, // Utilisation directe du composant
    pathMatch: 'full' // Utiliser pathMatch: 'full' pour le chemin vide
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  {
    path: 'new-user',
    component: AddUserFormComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
