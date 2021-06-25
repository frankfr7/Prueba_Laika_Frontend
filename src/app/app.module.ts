import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditTipoDocumentoComponent } from './components/edit-tipo-documento/edit-tipo-documento.component';
import { AddTipoDocumentoComponent } from './components/add-tipo-documento/add-tipo-documento.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    EditUserComponent,
    EditTipoDocumentoComponent,
    AddTipoDocumentoComponent,
    ViewUserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
