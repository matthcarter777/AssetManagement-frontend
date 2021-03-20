import { ContentComponent } from './components/shared/layout/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { ShowContractComponent } from './components/lending-contract/show-contract/show-contract.component';
import { LendingContractUpdateComponent } from './components/lending-contract/lending-contract-update/lending-contract-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Lending Contract */
import { LendingContractComponent } from './view/lending-contract/lending-contract.component';
import { LendingContractCreateComponent } from './components/lending-contract/lending-contract-create/lending-contract-create.component';
import { LendingContractDeleteComponent } from './components/lending-contract/lending-contract-delete/lending-contract-delete.component';

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
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "categories", component: TypeComponent},
      { path: "categories/create", component: TypeCreateComponent},
      { path: "categories/update/:id", component: TypeUpdateComponent},
      { path: "categories/delete/:id", component: TypeDeleteComponent},
      { path: "equipments", component: EquipmentComponent},
      { path: "equipments/create", component: EquipmentCreateComponent},
      { path: "equipments/delete/:id", component: EquipmentDeleteComponent},
      { path: "equipments/update/:id", component: EquipmentUpdateComponent},
      { path: "users", component: UserComponent},
      { path: "users/create", component: UserCreateComponent},
      { path: "users/delete/:id", component: UserDeleteComponent},
      { path: "users/update/:id", component: UserUpdateComponent},
      { path: "contracts", component: LendingContractComponent},
      { path: "contracts/create", component: LendingContractCreateComponent},
      { path: "contracts/update/:id", component: LendingContractUpdateComponent},
      { path: "contracts/show/:id", component: ShowContractComponent},
      { path: "contracts/delete/:id", component: LendingContractDeleteComponent},
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
