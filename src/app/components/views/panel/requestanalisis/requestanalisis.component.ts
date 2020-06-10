import { Component, OnInit, ViewChild } from '@angular/core';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
import swal from 'sweetalert';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-requestanalisis',
  templateUrl: './requestanalisis.component.html',
  styleUrls: ['./requestanalisis.component.css']
})
export class RequestanalisisComponent implements OnInit {

  listrequestanalisis = new MatTableDataSource<Requestanalysis>();
  headerrequestanalisis: string [] = ['code', 'requestAnalysisPK'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private requestsAnalisisService: RequestanalysisService
  ) {
    this.requestsAnalisisService.lisrequestanalysis().subscribe(
      (b: string) => {
        this.showrequestanalisis();
      }
    );
   }

  ngOnInit(): void {
    this.showrequestanalisis();
  }
  showrequestanalisis(){
    this.requestsAnalisisService.getRequestanalysis().subscribe(response => {
      this.listrequestanalisis = new MatTableDataSource<Requestanalysis>(response);
      this.listrequestanalisis.sort = this.sort;
      this.listrequestanalisis.paginator = this.paginator;
    });
  }

  applyFilterReqanalisis(valueFilter: string){
    this.listrequestanalisis.filter = valueFilter.trim().toLocaleLowerCase();
  }
}
