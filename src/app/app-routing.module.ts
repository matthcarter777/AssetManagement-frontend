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
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "categories",
    component: TypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "categories/create",
    component: TypeCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "categories/update/:id",
    component: TypeUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "categories/delete/:id",
    component: TypeDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipments",
    component: EquipmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipments/create",
    component: EquipmentCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipments/delete/:id",
    component: EquipmentDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipments/update/:id",
    component: EquipmentUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users",
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users/create",
    component: UserCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users/delete/:id",
    component: UserDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users/update/:id",
    component: UserUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contracts",
    component: LendingContractComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contracts/create",
    component: LendingContractCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contracts/update/:id",
    component: LendingContractUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contracts/show/:id",
    component: ShowContractComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contracts/delete/:id",
    component: LendingContractDeleteComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
