import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { RequestbatchesService } from 'src/app/services/requestbatches.services'
import { RequestBatches } from 'src/app/model/requestbatches';
import swal from 'sweetalert';
@Component({
  selector: 'app-requestbatches-show',
  templateUrl: './requestbatches-show.component.html',
  styleUrls: ['./requestbatches-show.component.css']
})
export class RequestbatchesShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
