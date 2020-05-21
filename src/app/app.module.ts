import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/crud/show/show.component';
import { ProductionsComponent } from './productions/productions.component';
import { AddProductionsComponent } from './productions/components/add-productions/add-productions.component';
import { EditProductionsComponent } from './productions/components/edit-productions/edit-productions.component';
import { ListProductionsComponent } from './productions/components/list-productions/list-productions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowComponent,
    ProductionsComponent,
    AddProductionsComponent,
    EditProductionsComponent,
    ListProductionsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
