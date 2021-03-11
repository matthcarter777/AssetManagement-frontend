import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Header */
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

/* Nav */
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';


/* Footer */
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { TypeComponent } from './view/type/type.component';

/* Home */

/* Shared */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TypeCreateComponent } from './components/type/type-create/type-create.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

/* Form */
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EquipmentComponent } from './view/equipment/equipment.component';
import { EquipmentCreateComponent } from './components/equipment/equipment-create/equipment-create.component';

/* HTTP */
import { HttpClientModule } from '@angular/common/http';
import { TypeIndexComponent } from './components/type/type-index/type-index.component';

/* Table */

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { TypeDeleteComponent } from './components/type/type-delete/type-delete.component';
import { TypeUpdateComponent } from './components/type/type-update/type-update.component';

import { EquipmentIndexComponent } from './components/equipment/equipment-index/equipment-index.component';
import { EquipmentDeleteComponent } from './components/equipment/equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './components/equipment/equipment-update/equipment-update.component';
import { UserComponent } from './view/user/user.component';
import { UserIndexComponent } from './components/user/user-index/user-index.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    TypeComponent,
    TypeCreateComponent,
    EquipmentComponent,
    EquipmentCreateComponent,
    TypeIndexComponent,
    TypeDeleteComponent,
    TypeUpdateComponent,
    EquipmentIndexComponent,
    EquipmentDeleteComponent,
    EquipmentUpdateComponent,
    UserComponent,
    UserIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
