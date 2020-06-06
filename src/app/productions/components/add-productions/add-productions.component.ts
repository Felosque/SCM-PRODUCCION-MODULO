import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductionsService, ProductionsClass} from '../../productions-service.service'
import {DateAdapter} from '@angular/material/core';
import { MatDialog } from "@angular/material/dialog";
import {DialogActionComponent} from '../dialog/dialog-action/dialog-action.component'
@Component({
  selector: 'app-add-productions',
  templateUrl: './add-productions.component.html',
  styleUrls: ['./add-productions.component.css']
})
export class AddProductionsComponent implements OnInit {
 
  public status: String;
  expirationDate= new Date()
  createDate= new Date()
  startOrderDate= new Date()
  time= String

  public btn: String;
  public page_title: String;
  constructor(private productionsService: ProductionsService, private router: Router,private dateAdapter: DateAdapter<any>, public dialogo: MatDialog) {this.page_title = 'Crear Lote' 
  this.btn = 'Guardar'
}

  ngOnInit(): void {
    this.dateAdapter.setLocale("es")
  }
  showDialogSuccesful(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Guardado con Exito`
    })
    .afterClosed()
  }
  showDialogError(): void {
    this.dialogo
    .open(DialogActionComponent, {
      data: `Error. No se ha guarado el elemento.`
    })
    .afterClosed()
  }
  save(): void{
    var productions = new ProductionsClass( this.createDate.toLocaleDateString() + " " +this.createDate.toLocaleTimeString(), this.expirationDate.toLocaleDateString() + " "+ this.expirationDate.toLocaleTimeString(), this.startOrderDate.toLocaleDateString() + " "+ this.startOrderDate.toLocaleTimeString(), this.time+":00" );
    this.productionsService.save(productions)
    .subscribe(
      data => {
        if (this.status = 'success') {
          this.showDialogSuccesful()
          this.status = 'succes';
          location.reload(true);
          this.router.navigate(['/productions']);
        }else{
          this.status = "error"
          this.showDialogError()
        }location.reload(true);
      },
      error => {
        this.showDialogError()
      }
    )
  }
  public onChange(event: any): void {
    console.log(event.target.value);
  }
}
