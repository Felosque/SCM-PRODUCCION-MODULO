import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.component.html',
  styleUrls: ['./paneladmin.component.css']
})
export class PaneladminComponent implements OnInit {

  public title_raw_material_requests: String
  public title_detail_raw_material: String

  constructor() { }

  ngOnInit(): void {
    this.title_raw_material_requests = "Solicitud materia prima"
    this.title_detail_raw_material = "Detalle solicitud materia prima"
  }

}
