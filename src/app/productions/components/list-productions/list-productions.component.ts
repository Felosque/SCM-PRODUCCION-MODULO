import { Component, OnInit } from '@angular/core';
import {Productions} from '../../productions'
import {ProductionsService} from '../../productions-service.service'

@Component({
  selector: 'app-list-productions',
  templateUrl: './list-productions.component.html',
  styleUrls: ['./list-productions.component.css']
})
export class ListProductionsComponent implements OnInit {

  constructor(private productionsService: ProductionsService) { }
  listDataProductions: Productions[]
  ngOnInit(): void {
    this.productionsService.getAll()
    .subscribe(
      data => {
        
        this.listDataProductions = data;
      }
    ) 
  }
  deleteById(id){
    this.productionsService.deleteById(id)
    .subscribe(
      data => {
        /*
        window.setTimeout(() => {
          location.reload()
         }, 1500)*/
      }
      
    )
  }
}
