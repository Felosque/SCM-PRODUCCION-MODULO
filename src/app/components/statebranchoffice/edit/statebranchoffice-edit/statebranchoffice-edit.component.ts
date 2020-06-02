import { Component, OnInit } from '@angular/core';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
import { StateBranchOfficeService } from 'src/app/services/statebranchoffice.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-statebranchoffice-edit',
  templateUrl: './statebranchoffice-edit.component.html',
  styleUrls: ['./statebranchoffice-edit.component.css'],
  providers: [StateBranchOfficeService]
})
export class StatebranchofficeEditComponent implements OnInit {

  public statebranchoffice: StateBranchOffice;
  public status: String;
  public page_title: String;
  public btn: String;
  public url: String;
  constructor(
    private _statebranhofficeService: StateBranchOfficeService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
      this.statebranchoffice = new StateBranchOffice(null,"");
      this.page_title = 'Editar Request State';
      this.btn = 'Actualizar';
      this.url = Global.url;
   }

  ngOnInit(): void {
    this.getstatebranchoffice();
  }

  save(){
    this._statebranhofficeService.updateStateBranchOffice(this.statebranchoffice.code,this.statebranchoffice).subscribe(response=>{
      this.status = 'success';
      this.statebranchoffice = response.statebranchoffice;
      alert("Se Actualizo Correctamente");
      this._router.navigate(['/StateBranchOffice'])
    })
  }

  getstatebranchoffice(){
    this._route.params.subscribe(params=>{
      let code = params['code'];
      this._statebranhofficeService.getStateBranchOffice(code).subscribe(
        response => {
          this.statebranchoffice = response;
        },error =>{
          console.log(error);
          
        }
      )
    })
  }


}
