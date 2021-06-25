// IMPORTS NECESARIOS
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { AddTipoDocumentoComponent } from "./components/add-tipo-documento/add-tipo-documento.component";
import { EditTipoDocumentoComponent } from "./components/edit-tipo-documento/edit-tipo-documento.component";

import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [

    // Home
    {path: '', component: HomeComponent},
    {path: 'add-user', component: AddUserComponent},
    {path: 'edit-user/{id}',component: EditUserComponent},
    {path: 'add-tipo-documento', component: AddTipoDocumentoComponent},
    {path: 'edit-tipo-documento/:id}', component: EditTipoDocumentoComponent},


    {path: '**', component: ErrorComponent}
];

// EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);