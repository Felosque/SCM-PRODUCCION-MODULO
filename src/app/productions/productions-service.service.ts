import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Productions} from './productions'
export class ProductionsClass{
  constructor(
    public createDate: String,
    public expirationDate: String,
    public startOrderDate: String,
    public time:String,
  ) {}
  
}
 
@Injectable({
    providedIn: 'root'
})
 export class ProductionsService {

    constructor(private service: HttpClient) { }
    readonly url = 'http://localhost:8089/scm-unibague/Production/'
    getAll(){
      return this.service.get<Productions[]>(this.url);
    }
    deleteById(id){
        return this.service.delete<Productions>(this.url + id)
    }
    save(ProductionsClass){
      return this.service.post<Productions>(this.url, ProductionsClass);
    }
    getById(id){
      return this.service.get<Productions>(this.url + id);
    }
    update(id, ProductionsClass){
      return this.service.put<Productions>(this.url + id, ProductionsClass);
    }
  }