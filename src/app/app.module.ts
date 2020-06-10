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
    ProductionDetailsComponentPanel
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
