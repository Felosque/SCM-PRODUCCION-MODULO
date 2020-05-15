import { Component, OnInit } from '@angular/core';
import {LISTS} from '../../../list-test'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  lists = LISTS;

  ngOnInit(): void {
  }

}
