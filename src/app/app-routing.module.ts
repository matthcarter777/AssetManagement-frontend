import { TypeDeleteComponent } from './components/type/type-delete/type-delete.component';
import { EquipmentCreateComponent } from './components/equipment/equipment-create/equipment-create.component';
import { EquipmentComponent } from './view/equipment/equipment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { TypeComponent } from './view/type/type.component';
import { TypeCreateComponent } from './components/type/type-create/type-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "categories",
    component: TypeComponent
  },
  {
    path: "categories/create",
    component: TypeCreateComponent
  },
  {
    path: "categories/delete/:id",
    component: TypeDeleteComponent
  },
  {
    path: "equipments",
    component: EquipmentComponent
  },
  {
    path: "equipments/create",
    component: EquipmentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
