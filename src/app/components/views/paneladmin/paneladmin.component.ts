import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.component.html',
  styleUrls: ['./paneladmin.component.css']
})
export class PaneladminComponent implements OnInit {

  public title_raw_material_requests: String

  constructor() { }

  ngOnInit(): void {
    this.title_raw_material_requests = "Solicitud materia prima"
  }

}
