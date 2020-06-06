import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/crud/show/show.component';
import {ListProductionsComponent} from './productions/components/list-productions/list-productions.component'
import {ListOneProductionsComponent} from './productions/components/list-one-productions/list-one-productions.component'
import {EditProductionsComponent} from './productions/components/edit-productions/edit-productions.component'
import {ListRawMaterialRequestsComponent} from './components/rawMaterialRequests/list-raw-material-requests/list-raw-material-requests.component'
import {ListOneRawMaterialRequestsComponent} from './components/rawMaterialRequests/list-one-raw-material-requests/list-one-raw-material-requests.component'
import {EditRawMaterialRequestsComponent} from './components/rawMaterialRequests/edit-raw-material-requests/edit-raw-material-requests.component'
const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'show', component:  ShowComponent },
    {path: 'productions', component:  ListProductionsComponent },
    {path: 'productions/show/:code', component:  ListOneProductionsComponent },
    {path: 'productions/:code', component:  EditProductionsComponent },
    {path: 'raw-material-requests', component:  ListRawMaterialRequestsComponent },
    {path: 'raw-material-requests/show/:code', component:  ListOneRawMaterialRequestsComponent },
    {path: 'raw-material-requests/:code', component:  EditRawMaterialRequestsComponent },
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);