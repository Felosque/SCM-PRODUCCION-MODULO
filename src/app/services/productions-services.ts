import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Productions} from '../model/productions';
import {Global} from '../services/global';
export class ProductionsClass{
  constructor(
    public createDate: string,
    public expirationDate: string,
    public startOrderDate: string,
    public time: string,
  ) {}

}

@Injectable({
    providedIn: 'root'
})

export class ProductionsService {

}
