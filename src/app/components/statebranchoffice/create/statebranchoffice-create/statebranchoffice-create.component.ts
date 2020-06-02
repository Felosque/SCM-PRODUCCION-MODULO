import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
import { StateBranchOfficeService } from 'src/app/services/statebranchoffice.services';
@Component({
  selector: 'app-statebranchoffice-create',
  templateUrl: './statebranchoffice-create.component.html',
  styleUrls: ['./statebranchoffice-create.component.css']
})
export class StatebranchofficeCreateComponent implements OnInit {

  public statebranchoffice: StateBranchOffice;
  public page_title: String
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private statebranchofficeService: StateBranchOfficeService
  ) { 
    this.statebranchoffice = new StateBranchOffice(null,"");
    this.page_title = 'Crear Estado Sucursal'
    this.btn = 'Guardar'
   }

  ngOnInit(): void {
  }

  save(){
    this.statebranchofficeService.addStateBranchOffice(this.statebranchoffice).subscribe(response=>{
      this.status = 'success';
      alert("Se agrego correctamente");
      location.reload(true);
      this.statebranchoffice = response.statebranchoffice;
      this.router.navigate(['/StateBranchOffice']);
    })
  }
}
