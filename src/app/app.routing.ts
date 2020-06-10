import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/crud/show/show.component';
import {ListProductionStatesComponent} from './components/entities/production-states/components/list-production-states/list-production-states.component'
import {ListOneProductionStatesComponent} from './components/entities/production-states/components/list-one-production-states/list-one-production-states.component'
import {EditProductionStatesComponent} from './components/entities/production-states/components/edit-production-states/edit-production-states.component'
import {ListProductionDetailsComponent} from './components/entities/production-details/list-production-details/list-production-details.component'
import {ListOneProductionDetailsComponent} from './components/entities/production-details/list-one-production-details/list-one-production-details.component'
import {EditProductionDetailsComponent} from './components/entities/production-details/edit-production-details/edit-production-details.component'

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'show', component:  ShowComponent },
    {path: 'production-states', component:  ListProductionStatesComponent},{path: 'production-states/show/:code', component:  ListOneProductionStatesComponent},
    {path: 'production-states/:code', component:  EditProductionStatesComponent},
    {path: 'production-details', component:  ListProductionDetailsComponent},
    {path: 'production-details/show/:productsCode/:productBatch', component:  ListOneProductionDetailsComponent},
    {path: 'production-details/:productsCode/:productBatch', component:  EditProductionDetailsComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);