import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequestbatchesService } from 'src/app/services/requestbatches.services';
import { RequestBatches } from 'src/app/model/requestbatches';

@Component({
  selector: 'app-requestbatches-show-one',
  templateUrl: './requestbatches-show-one.component.html',
  styleUrls: ['./requestbatches-show-one.component.css']
})
export class RequestbatchesShowOneComponent implements OnInit {

  public requestbatches: RequestBatches;
  public description: number;
  public url: string;
  public title: string;
  constructor(
    private requestbatchesService: RequestbatchesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = Global.url;
    this.title = 'Solicitud Lotes';

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const code = params.code;
      this.requestbatchesService.getRequestbatch(code).subscribe(
        response => {
          this.requestbatches = response;
        }, error => {
          console.log(error);
        }
      );
    });
  }

}
