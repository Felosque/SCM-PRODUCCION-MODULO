import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RawMaterialRequests} from './rawMaterialRequests'
export class RawMaterialRequestsClass{
  constructor(
    public state: Number,
    public requestDate: String,
    public numberOrder: Number,
    public numberBatch: Number
  ) {}
  
}
 
@Injectable({
    providedIn: 'root'
})
 export class RawMaterialRequestsService {

    constructor(private service: HttpClient) { }
    readonly url = 'http://localhost:8089/scm-unibague/RawMaterialRequests/'
    getAll(){
      return this.service.get<RawMaterialRequests[]>(this.url);
    }
    deleteById(id){
        return this.service.delete<RawMaterialRequests>(this.url + id)
    }
    save(RawMaterialRequestsClass){
      return this.service.post<RawMaterialRequests>(this.url, RawMaterialRequestsClass);
    }
    getById(id){
      return this.service.get<RawMaterialRequests>(this.url + id);
    }
    update(id, RawMaterialRequestsClass){
      return this.service.put<RawMaterialRequests>(this.url + id, RawMaterialRequestsClass);
    }
  }