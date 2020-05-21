import { Component, OnInit } from '@angular/core';
import {ProductionsService, ProductionsClass} from '../../productions-service.service'
@Component({
  selector: 'app-add-productions',
  templateUrl: './add-productions.component.html',
  styleUrls: ['./add-productions.component.css']
})
export class AddProductionsComponent implements OnInit {
  expirationDate = new Date();
  createDate = new Date();
  startOrderDate = new Date();
  time: String;

  constructor(private productionsService: ProductionsService) { }

  ngOnInit(): void {
  }
  save(): void{
    var productions = new ProductionsClass( this.createDate.toLocaleDateString() + " " +this.createDate.toLocaleTimeString(), this.expirationDate.toLocaleDateString() + " "+ this.expirationDate.toLocaleTimeString(), this.startOrderDate.toLocaleDateString() + " "+ this.startOrderDate.toLocaleTimeString(), this.time+":00" );
    console.log(productions)
    this.productionsService.save(productions)
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
}
