import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from './global';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkShiftsService {
  public url: string;

  constructor(
    private http: HttpClient
  ){
    this.url = Global.url + 'workshift';
  }

  add(workshift): Observable<any>{
    let params= JSON.stringify(workshift);
    let headers = new
    HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url, params,{headers : headers});
  }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  getOne(workshiftId): Observable<any>{
    return this.http.get(this.url + '/' + workshiftId);
  }

  update(code, workshift): Observable<any>{
    let params = JSON.stringify(workshift);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(this.url + '/' + code,params,{headers:headers});
  }

  delete(code): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + '/' + code, {headers:headers});
  }

}
