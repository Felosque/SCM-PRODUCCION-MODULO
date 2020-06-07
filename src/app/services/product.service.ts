import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url;
  }

  addProduct(product): Observable<any> {
    const params = JSON.stringify(product);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'product', params, {headers: headers});
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url + 'product');
  }

  getProduct(productId): Observable<any> {
    return this.http.get(this.url + 'product/' + productId);
  }

  updateProduct(code, product): Observable<any> {
    const params = JSON.stringify(product);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + 'product/' + code, params, {headers: headers});
  }
  deleteProduct(code): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'product/' + code, {headers: headers});
  }
}
