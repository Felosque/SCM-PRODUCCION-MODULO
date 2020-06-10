import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/crud/show/show.component';
import {ListProductionsComponent} from './components/entities/productions/components/list-productions/list-productions.component'
import {ListOneProductionsComponent} from './components/entities/productions/components/list-one-productions/list-one-productions.component'
import {EditProductionsComponent} from './components/entities/productions/components/edit-productions/edit-productions.component'
import {ListRawMaterialRequestsComponent} from './components/entities/rawMaterialRequests/list-raw-material-requests/list-raw-material-requests.component'
import {ListOneRawMaterialRequestsComponent} from './components/entities/rawMaterialRequests/list-one-raw-material-requests/list-one-raw-material-requests.component'
import {EditRawMaterialRequestsComponent} from './components/entities/rawMaterialRequests/edit-raw-material-requests/edit-raw-material-requests.component'
import { PaneladminComponent } from './components/views/paneladmin/paneladmin.component';
import {ListDetailsRawMaterialComponent} from './components/entities/detailsRawMaterial/list-details-raw-material/list-details-raw-material.component'
import {ListOneDetailsRawMaterialComponent} from './components/entities/detailsRawMaterial/list-one-details-raw-material/list-one-details-raw-material.component'
import {EditDetailsRawMaterialComponent} from './components/entities/detailsRawMaterial/edit-details-raw-material/edit-details-raw-material.component'
import {ListRawMaterialDeliveryComponent} from './components/entities/rawMaterialDelivery/list-raw-material-delivery/list-raw-material-delivery.component'
import {ListOneRawMaterialDeliveryComponent} from './components/entities/rawMaterialDelivery/list-one-raw-material-delivery/list-one-raw-material-delivery.component'
import {EditRawMaterialDeliveryComponent} from './components/entities/rawMaterialDelivery/edit-raw-material-delivery/edit-raw-material-delivery.component'

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'paneladmin', component: PaneladminComponent},
    {path: 'show', component:  ShowComponent },
    {path: 'productions', component:  ListProductionsComponent },
    {path: 'productions/show/:code', component:  ListOneProductionsComponent },
    {path: 'productions/:code', component:  EditProductionsComponent },
    {path: 'raw-material-requests', component:  ListRawMaterialRequestsComponent },
    {path: 'raw-material-requests/show/:code', component:  ListOneRawMaterialRequestsComponent },
    {path: 'raw-material-requests/:code', component:  EditRawMaterialRequestsComponent },
    {path: 'requests-details-raw-material', component:  ListDetailsRawMaterialComponent },
    {path: 'requests-details-raw-material/show/:code', component:  ListOneDetailsRawMaterialComponent },
    {path: 'requests-details-raw-material/:code', component:  EditDetailsRawMaterialComponent },
    {path: 'raw-material-delivery-states', component:  ListRawMaterialDeliveryComponent },
    {path: 'raw-material-delivery-states/show/:code', component:  ListOneRawMaterialDeliveryComponent },
    {path: 'raw-material-delivery-states/:code', component:  EditRawMaterialDeliveryComponent },
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);