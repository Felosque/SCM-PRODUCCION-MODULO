import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class MachinestateService {
    public url: string;

    constructor(
        private http: HttpClient
    ){
        this.url = Global.url;
    }

    addMachineState(machinestate): Observable<any>{
        const params = JSON.stringify(machinestate);
        const headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + '/machinestate', params, {headers});
    }

    getMachineStates(): Observable<any>{
        return this.http.get(this.url + '/machinestate');
    }

    getMachineState(machinestateId): Observable<any>{
        return this.http.get(this.url + 'machinestate/' + machinestateId);
    }

    updateMachineState(code, machinestate): Observable<any>{
        const params = JSON.stringify(machinestate);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'machinestate/' + code, params, {headers});
    }

    deleteMachine(code): Observable<any>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.delete(this.url + 'machinestate/' + code, {headers});
    }
}
