import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.component.html',
  styleUrls: ['./paneladmin.component.css']
})
export class PaneladminComponent implements OnInit {

  public titleOne: string;
  public titleTwo: string;
  public titleThree: string;

  constructor(
  ) {


    this.titleOne = 'Sucursales';
    this.titleTwo = 'Maquinaria';

    this.titleThree = 'Solicitud lotes';

  }

  ngOnInit(): void {

  }





}
