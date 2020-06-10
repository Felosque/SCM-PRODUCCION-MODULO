import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductionStates} from './production-states'
export class ProductionStatesClass{
  constructor(
    public description: String
  ) {}
  
}
@Injectable({
    providedIn: 'root'
})
  export class ProductionStatesService {

    constructor(private service: HttpClient) { }
    readonly url = 'http://localhost:8089/scm-unibague/ProductionState/'
    getAll(){
      return this.service.get<ProductionStates[]>(this.url);
    }
    deleteById(id){
        return this.service.delete<ProductionStates>(this.url + id)
    }
    save(ProductionStatesClass){
      return this.service.post<ProductionStatesClass>(this.url, ProductionStatesClass);
    }
    getById(id){
      return this.service.get<ProductionStatesClass>(this.url + id);
    }
    update(id, ProductionStatesClass){
      return this.service.put<ProductionStatesClass>(this.url + id, ProductionStatesClass);
    }
  }