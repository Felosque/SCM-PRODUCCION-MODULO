import { Component, OnInit } from '@angular/core';
import {Process} from '../../../../model/process';
import {ProcessService} from '../../../../services/process.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.css']
})
export class ProcessCreateComponent implements OnInit {

  public process: Process;
  public pageTitle: string;
  public status: string;
  public btn: string;

  constructor(public processService: ProcessService,
              public router: Router
  ) { }

  ngOnInit(): void {
    this.process = new Process(null, '', null, '', null, null);
    this.pageTitle = 'Create Process';
    this.btn = 'Guardar';
  }

  save(): void{
    this.processService.addProcess(this.process)
      .subscribe(
        response => {
          if (this.status = 'success') {
            swal(
              'Proceso creado!!',
              'El proceso ha sido creado correctamente',
              'success'
            );

            location.reload(true);
            this.process = response;
            this.router.navigate(['/process']);
          }
          else {
            this.status = 'error';
            swal(
              'Proceso creado!!',
              'El proceso no se ha creado correctamente :(',
              'error'
            );
          }

          location.reload(true);
        }
      );
  }
}
