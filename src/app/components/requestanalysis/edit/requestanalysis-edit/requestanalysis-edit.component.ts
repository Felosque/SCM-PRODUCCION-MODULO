import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
import { Requestanalysis } from 'src/app/model/requestanalysis';
@Component({
  selector: 'app-requestanalysis-edit',
  templateUrl: './requestanalysis-edit.component.html',
  styleUrls: ['./requestanalysis-edit.component.css'],
  providers: [RequestanalysisService]
})
export class RequestanalysisEditComponent implements OnInit {

  public status: String;
  public requestanalysis: Requestanalysis;
  public page_title: String;
  public btn: String;
  public url: String;
  constructor(
    private _requestanalysisService: RequestanalysisService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
      this.requestanalysis = new Requestanalysis(null,null);
      this.page_title = 'Editar request analysis'
      this.btn = 'Actualizar'
      this.url = Global.url 
   }

  ngOnInit(): void {
    this.getrequestanalysis();
  }

  save(){
    this._requestanalysisService.updateRequestanalysis(this.requestanalysis.code,this.requestanalysis).subscribe(response=>{
      this.status = 'success';
      this.requestanalysis = response.requestanalysis;
      alert("Se Actualizo Correctamente");
      this._router.navigate(['/requeststatus'])
    })
  }

  getrequestanalysis(){
    this._route.params.subscribe(params=>{
      let code = params['code'];
      this._requestanalysisService.getRequestanalyse(code).subscribe(
        response => {
          this.requestanalysis = response;
        },error =>{
          console.log(error);
          
        }
      )
    })
  }
}
