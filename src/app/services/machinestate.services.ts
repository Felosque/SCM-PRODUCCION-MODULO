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
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    addMachineState(machinestate):Observable<any>{
        let params= JSON.stringify(machinestate);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/machinestate', params,{headers : headers});
    }

    getMachineStates():Observable<any>{
        return this._http.get(this.url+'/machinestate');
    }

    getMachineState(machinestateId):Observable<any>{
        return this._http.get(this.url+'machinestate/'+machinestateId);
    }

    updateMachineState(code, machinestate):Observable<any>{
        let params = JSON.stringify(machinestate);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'machinestate/'+code,params,{headers:headers});
    }

    deleteMachine(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'machinestate/'+code, {headers:headers});
    }
}
