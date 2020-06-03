import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../../services/global';
import {Observable, Subject} from 'rxjs';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url: string;

  constructor(
    private service: HttpClient
  ){
    this.url = Global.url + '/product';
  }
  formData: Product;
  private listeners = new Subject<string>();

  getAll(): Observable<Product[]> {
    return this.service.get<Product[]>(this.url);
  }

  addProduct(product: Product){
    return this.service.post(this.url, product);
  }

  deleteProduct(id: number) {
    return this.service.delete(this.url + '/' + id);
  }

  updateProduct(product: Product){
    return this.service.put(this.url + '/' + product.code , product);
  }

  listen(): Observable<string>{
    return this.listeners.asObservable();
  }

  filter(filterBy: string){
    this.listeners.next(filterBy);
  }
}
