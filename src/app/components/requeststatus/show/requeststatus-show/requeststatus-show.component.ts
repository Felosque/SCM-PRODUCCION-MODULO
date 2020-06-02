import { Component, OnInit } from '@angular/core';
import { Requeststate } from 'src/app/model/requeststatus';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { RequeststateService } from 'src/app/services/requeststatus.services'
import { Machinestate } from 'src/app/model/machinestate';
@Component({
  selector: 'app-requeststatus-show',
  templateUrl: './requeststatus-show.component.html',
  styleUrls: ['./requeststatus-show.component.css']
})
export class RequeststatusShowComponent implements OnInit {

  public requeststatus: Requeststate[];
  public title: String;
  constructor(
    private _requeststateService: RequeststateService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) {
    this.title = 'Request Status'
    
   }

  ngOnInit(): void {
    this._requeststateService.getRequestStates().subscribe(response=>{
      this.requeststatus=response;
    })
  }

  deleterequeststate(code){
    this._requeststateService.deleteRequeststate(code).subscribe(
      response =>{
        this.ngOnInit();
      }
    )
  }

}
