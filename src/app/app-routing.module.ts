import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Equipment */
import { EquipmentComponent } from './view/equipment/equipment.component';
import { EquipmentUpdateComponent } from './components/equipment/equipment-update/equipment-update.component';
import { EquipmentDeleteComponent } from './components/equipment/equipment-delete/equipment-delete.component';
import { EquipmentCreateComponent } from './components/equipment/equipment-create/equipment-create.component';

/* Type */
import { TypeComponent } from './view/type/type.component';
import { TypeUpdateComponent } from './components/type/type-update/type-update.component';
import { TypeDeleteComponent } from './components/type/type-delete/type-delete.component';
import { TypeCreateComponent } from './components/type/type-create/type-create.component';

/* Home */
import { HomeComponent } from './view/home/home.component';

/* User */
import { UserComponent } from './view/user/user.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';


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
    path: "categories/update/:id",
    component: TypeUpdateComponent
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
  },
  {
    path: "equipments/delete/:id",
    component: EquipmentDeleteComponent
  },
  {
    path: "equipments/update/:id",
    component: EquipmentUpdateComponent
  },
  {
    path: "users",
    component: UserComponent
  },
  {
    path: "users/create",
    component: UserCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
