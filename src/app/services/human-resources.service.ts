import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from './global';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumanResourcesService {
  public url: string;

  constructor(
    private http: HttpClient
  ){
    this.url = Global.url + 'humanresource';
  }

  add(humanresource): Observable<any>{
    let params= JSON.stringify(humanresource);
    let headers = new
    HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, params,{headers : headers});
  }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  getOne(humanresourceId): Observable<any>{
    return this.http.get(this.url + '/' + humanresourceId);
  }

  update(code, humanresource): Observable<any>{
    let params = JSON.stringify(humanresource);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + '/' + code,params,{headers:headers});
  }

  delete(code): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + '/' + code, {headers:headers});
  }

}
