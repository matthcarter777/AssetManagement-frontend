import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { TypeComponent } from './view/type/type.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "categories",
    component: TypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
