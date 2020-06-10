import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/crud/show/show.component';
import { ProductionStatesComponent } from './components/entities/production-states/production-states.component';
import { AddProductionStatesComponent } from './components/entities/production-states/components/add-production-states/add-production-states.component';
import { EditProductionStatesComponent } from './components/entities/production-states/components/edit-production-states/edit-production-states.component';
import { ListProductionStatesComponent } from './components/entities/production-states/components/list-production-states/list-production-states.component';
import { ProductionsComponent } from './components/entities/productions/productions.component';
import { AddProductionsComponent } from './components/entities/productions/components/add-productions/add-productions.component';
import {AddProductionsDialogComponent} from './components/entities/productions/components/add-productions/add-productions-dialog/add-productions-dialog.component'
import { EditProductionsComponent } from './components/entities/productions/components/edit-productions/edit-productions.component';
import { ListProductionsComponent } from './components/entities/productions/components/list-productions/list-productions.component';
import { ListOneProductionsComponent } from './components/entities/productions/components/list-one-productions/list-one-productions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DialogActionComponent } from './components/entities/production-states/components/dialog/dialog-action/dialog-action.component';
import { DialogConfirmationComponent } from './components/entities//production-states/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { ListOneProductionStatesComponent } from './components/entities//production-states/components/list-one-production-states/list-one-production-states.component';
import { AddProductionStatesDialogComponent } from './components/entities//production-states/components/add-production-states/add-production-states-dialog/add-production-states-dialog.component';
import { DialogConfirmationProductionsComponent } from './components/entities/productions/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { DialogActionProductionsComponent } from './components/entities/productions/components/dialog/dialog-action/dialog-action.component';
import { AddRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/add-raw-material-requests/add-raw-material-requests.component';
import { EditRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/edit-raw-material-requests/edit-raw-material-requests.component';
import { ListRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/list-raw-material-requests/list-raw-material-requests.component';
import { ListOneRawMaterialRequestsComponent } from './components/entities/rawMaterialRequests/list-one-raw-material-requests/list-one-raw-material-requests.component';
import { AddRawMaterialRequestsDialogComponent } from './components/entities/rawMaterialRequests/add-raw-material-requests/add-raw-material-requests-dialog/add-raw-material-requests-dialog.component';
import { ShowDialogNumberBatchComponent } from './components/entities/rawMaterialRequests/list-raw-material-requests/show-dialog-number-batch/show-dialog-number-batch.component';
import { RawMaterialRequestsComponent } from './components/views/panel/raw-material-requests/raw-material-requests.component';
import { PaneladminComponent } from './components/views/paneladmin/paneladmin.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductionDetailsComponent } from './components/entities/production-details/production-details.component';
import { AddProductionDetailsComponent } from './components/entities/production-details/add-production-details/add-production-details.component';
import { ListProductionDetailsComponent } from './components/entities/production-details/list-production-details/list-production-details.component';
import { ListOneProductionDetailsComponent } from './components/entities/production-details/list-one-production-details/list-one-production-details.component';
import { EditProductionDetailsComponent } from './components/entities/production-details/edit-production-details/edit-production-details.component';
import { AddProductionDetailsDialogComponent } from './components/entities/production-details/add-production-details/add-production-details-dialog/add-production-details-dialog.component';
import { ShowDialogProductBatchComponent } from './components/entities/production-details/list-production-details/show-dialog-product-batch/show-dialog-product-batch.component';
import {ProductionDetailsComponentPanel} from './components/views/panel/production-details/production-details.component'

import { AddDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/add-details-raw-material/add-details-raw-material.component';
import { ListDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/list-details-raw-material/list-details-raw-material.component';
import { EditDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/edit-details-raw-material/edit-details-raw-material.component';
import { ListOneDetailsRawMaterialComponent } from './components/entities/detailsRawMaterial/list-one-details-raw-material/list-one-details-raw-material.component';
import { AddDetailsRawMaterialDialogComponent } from './components/entities/detailsRawMaterial/add-details-raw-material/add-details-raw-material-dialog/add-details-raw-material-dialog.component';
import { DialogRawMaterialRequestsComponent } from './components/entities/detailsRawMaterial/list-details-raw-material/dialog-raw-material-requests/dialog-raw-material-requests.component';
import { AddRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/add-raw-material-delivery/add-raw-material-delivery.component';
import { ListRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/list-raw-material-delivery/list-raw-material-delivery.component';
import { EditRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/edit-raw-material-delivery/edit-raw-material-delivery.component';
import { ListOneRawMaterialDeliveryComponent } from './components/entities/rawMaterialDelivery/list-one-raw-material-delivery/list-one-raw-material-delivery.component';
import { AddRawMaterialDeliveryDialogComponent } from './components/entities/rawMaterialDelivery/add-raw-material-delivery/add-raw-material-delivery-dialog/add-raw-material-delivery-dialog.component';
import { ShowDialogRequestsComponent } from './components/entities/rawMaterialDelivery/list-raw-material-delivery/show-dialog-requests/show-dialog-requests.component';
import { RequestDetailRawMaterialComponent } from './components/views/panel/request-detail-raw-material/request-detail-raw-material.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowComponent,
    ProductionStatesComponent,
    AddProductionStatesComponent,
    EditProductionStatesComponent,
    ListProductionStatesComponent,
    DialogActionComponent,
    DialogConfirmationComponent,
    ListOneProductionStatesComponent,
    AddProductionStatesDialogComponent,
    PaneladminComponent,
    ProductionDetailsComponent,
    AddProductionDetailsComponent,
    ListProductionDetailsComponent,
    ListOneProductionDetailsComponent,
    EditProductionDetailsComponent,
    AddProductionDetailsDialogComponent,
    ShowDialogProductBatchComponent,
    ProductionDetailsComponentPanel,
    ProductionsComponent,
    AddProductionsComponent,
    AddProductionsDialogComponent,
    EditProductionsComponent,
    ListProductionsComponent,
    ListOneProductionsComponent,
    DialogConfirmationProductionsComponent,
    DialogActionProductionsComponent,
    AddRawMaterialRequestsComponent,
    EditRawMaterialRequestsComponent,
    ListRawMaterialRequestsComponent,
    ListOneRawMaterialRequestsComponent,
    AddRawMaterialRequestsDialogComponent,
    ShowDialogNumberBatchComponent,
    RawMaterialRequestsComponent,
    PaneladminComponent,
    AddDetailsRawMaterialComponent,
    ListDetailsRawMaterialComponent,
    EditDetailsRawMaterialComponent,
    ListOneDetailsRawMaterialComponent,
    AddDetailsRawMaterialDialogComponent,
    DialogRawMaterialRequestsComponent,
    AddRawMaterialDeliveryComponent,
    ListRawMaterialDeliveryComponent,
    EditRawMaterialDeliveryComponent,
    ListOneRawMaterialDeliveryComponent,
    AddRawMaterialDeliveryDialogComponent,
    ShowDialogRequestsComponent,
    RequestDetailRawMaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
