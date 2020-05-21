import { Component, OnInit } from '@angular/core';
import {Productions} from '../../productions'
import {ProductionsService, ProductionsClass} from '../../productions-service.service'
@Component({
  selector: 'app-edit-productions',
  templateUrl: './edit-productions.component.html',
  styleUrls: ['./edit-productions.component.css']
})
export class EditProductionsComponent implements OnInit {
  expirationDate = new Date();
  createDate = new Date();
  startOrderDate = new Date();
  time: String;
  listDataProductions: Productions
  constructor(private productionsService: ProductionsService) { }

  ngOnInit(): void {
  }
  edit(id): void{
    var productions = new ProductionsClass( this.createDate.toLocaleDateString() + " " +this.createDate.toLocaleTimeString(), this.expirationDate.toLocaleDateString() + " "+ this.expirationDate.toLocaleTimeString(), this.startOrderDate.toLocaleDateString() + " "+ this.startOrderDate.toLocaleTimeString(), this.time+":00" );
    console.log(productions)
    this.productionsService.update(id,productions)
    .subscribe(
      data => {
        //this.mostrarDialogoAction();
        /*
        window.setTimeout(() => {
          location.reload()
         }, 1500)
         */
      }
    )
  }
  getById(id){
    this.productionsService.getById(id)
    .subscribe(
      data => {
        this.listDataProductions = data;
        this.expirationDate = new Date(this.listDataProductions.expirationDate.toString())
        this.createDate = new Date(this.listDataProductions.createDate.toString())
        this.startOrderDate = new Date(this.listDataProductions.startOrderDate.toString())
        this.time = this.listDataProductions.time;
      }
      
    )
  }
}
