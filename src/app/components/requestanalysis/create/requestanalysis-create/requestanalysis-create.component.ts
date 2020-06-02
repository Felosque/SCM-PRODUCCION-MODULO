import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
@Component({
  selector: 'app-requestanalysis-create',
  templateUrl: './requestanalysis-create.component.html',
  styleUrls: ['./requestanalysis-create.component.css']
})
export class RequestanalysisCreateComponent implements OnInit {

  public requestanalysis: Requestanalysis;
  public listrequeststates: Requestanalysis[];
  public page_title: String
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private requestanalysisService: RequestanalysisService
  ) {
    this.requestanalysis = new Requestanalysis(null,null);
    this.page_title = 'Crear Request Status'
    this.btn = 'Guardar'
  }

  ngOnInit(): void {
  }
  save(){
    this.requestanalysisService.addRequestanalysis(this.requestanalysis).subscribe(response=>{
      this.status = 'success';
      alert("Se agrego correctamente");
      location.reload(true);
      this.requestanalysis = response.requestanalysis;
      this.router.navigate(['/RequestAnalysis']);
    })
  }

  getAllRequeststatus(){
    this.requestanalysisService.getRequestStates().subscribe(
      data =>{
        this.listrequeststates = data;
      }
    );
  }
}
