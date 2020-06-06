import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/crud/show/show.component';
import { ProductionsComponent } from './productions/productions.component';
import { AddProductionsComponent } from './productions/components/add-productions/add-productions.component';
import {AddProductionsDialogComponent} from './productions/components/add-productions/add-productions-dialog/add-productions-dialog.component'
import { EditProductionsComponent } from './productions/components/edit-productions/edit-productions.component';
import { ListProductionsComponent } from './productions/components/list-productions/list-productions.component';
import { ListOneProductionsComponent } from './productions/components/list-one-productions/list-one-productions.component';
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
import { DialogConfirmationComponent } from './productions/components/dialog/dialog-confirmation/dialog-confirmation.component';
import { DialogActionComponent } from './productions/components/dialog/dialog-action/dialog-action.component';
import { AddRawMaterialRequestsComponent } from './components/rawMaterialRequests/add-raw-material-requests/add-raw-material-requests.component';
import { EditRawMaterialRequestsComponent } from './components/rawMaterialRequests/edit-raw-material-requests/edit-raw-material-requests.component';
import { ListRawMaterialRequestsComponent } from './components/rawMaterialRequests/list-raw-material-requests/list-raw-material-requests.component';
import { ListOneRawMaterialRequestsComponent } from './components/rawMaterialRequests/list-one-raw-material-requests/list-one-raw-material-requests.component';
import { AddRawMaterialRequestsDialogComponent } from './components/rawMaterialRequests/add-raw-material-requests/add-raw-material-requests-dialog/add-raw-material-requests-dialog.component';
import { ShowDialogNumberBatchComponent } from './components/rawMaterialRequests/list-raw-material-requests/show-dialog-number-batch/show-dialog-number-batch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowComponent,
    ProductionsComponent,
    AddProductionsComponent,
    AddProductionsDialogComponent,
    EditProductionsComponent,
    ListProductionsComponent,
    ListOneProductionsComponent,
    DialogConfirmationComponent,
    DialogActionComponent,
    AddRawMaterialRequestsComponent,
    EditRawMaterialRequestsComponent,
    ListRawMaterialRequestsComponent,
    ListOneRawMaterialRequestsComponent,
    AddRawMaterialRequestsDialogComponent,
    ShowDialogNumberBatchComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
