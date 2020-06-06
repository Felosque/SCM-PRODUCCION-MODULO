import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from './global';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = Global.url;
  }

  getProcesses(): Observable<any> {
    return this.http.get(this.url + 'process');
  }

  getProcess(processId): Observable<any> {
    return  this.http.get(this.url + 'process/' + processId);
  }

  addProcess(process): Observable<any> {
    const params = JSON.stringify(process);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'process', params, {headers: headers});
  }

  deleteProcess(code): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url + 'process', {headers: headers});
  }

  updateProcess(code): Observable<any>{
    const params = JSON.stringify(process);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'process', params, {headers: headers});
  }
}
