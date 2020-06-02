import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { BranchofficeService } from 'src/app/services/branchoffice.services'
import { Branchoffice } from 'src/app/model/branchoffice';
@Component({
  selector: 'app-branchoffice-edit',
  templateUrl: './branchoffice-edit.component.html',
  styleUrls: ['./branchoffice-edit.component.css'],
  providers: [ BranchofficeService]
})
export class BranchofficeEditComponent implements OnInit {
  public status: String;
  public branchoffice: Branchoffice;
  public page_title: String;
  public btn: String;
  public url: String;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _branchofficeService: BranchofficeService
  ) { 
    this.branchoffice = new Branchoffice(null,"","",null);
      this.page_title = 'Editar Sucursal'
      this.btn = 'Actualizar'
      this.url = Global.url 
  }

  ngOnInit(): void {
    this.getBranchoffice();
  }

  save(){
    this._branchofficeService.updateBranchoffice(this.branchoffice.code,this.branchoffice).subscribe(response=>{
      this.status = 'success';
      this.branchoffice = response.branchoffice;
      alert("Se Actualizo Correctamente");
      this._router.navigate(['/branchoffice'])
    })
  }

  getBranchoffice(){
    this._route.params.subscribe(params=>{
      let code = params['code'];
      this._branchofficeService.getBranchoffice(code).subscribe(
        response => {
          this.branchoffice = response;
        },error =>{
          console.log(error);
          
        }
      )
    })
  }

}
