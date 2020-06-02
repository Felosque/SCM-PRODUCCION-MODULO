import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
@Component({
  selector: 'app-requestanalysis-show',
  templateUrl: './requestanalysis-show.component.html',
  styleUrls: ['./requestanalysis-show.component.css']
})
export class RequestanalysisShowComponent implements OnInit {

  public requestanalysis: Requestanalysis[];
  public title: String;
  constructor(
    private _requestanalysisService: RequestanalysisService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) {
    this.title = 'Request analysis'
   }

  ngOnInit(): void {
    this._requestanalysisService.getRequestanalysis().subscribe(response=>{
      this.requestanalysis=response;
    })
  }

  deleterequestanalysis(code){
    this._requestanalysisService.deleteRequestanalysis(code).subscribe(
      response =>{
        this.ngOnInit();
      }
    )
  }

}
