import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.component.html',
  styleUrls: ['./paneladmin.component.css']
})
export class PaneladminComponent implements OnInit {

  public title_production_details: String;

  constructor() { }

  ngOnInit(): void {
    this.title_production_details = "Detalles de la producción"
  }

}
