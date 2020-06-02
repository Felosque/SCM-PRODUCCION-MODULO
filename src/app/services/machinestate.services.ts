import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Global} from '../services/global'
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
        return this._http.post(this.url+'/MachineState',params,{headers: headers});
    }

    getMachineStates():Observable<any>{
        return this._http.get(this.url+'/MachineState');
    }

    getMachineState(machinestateId):Observable<any>{
        return this._http.get(this.url+'MachineState/'+machinestateId);
    }

    updateMachineState(code, machinestate):Observable<any>{
        let params = JSON.stringify(machinestate);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'MachineState/'+code,params,{headers:headers});
    }

    deleteMachine(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'MachineState/'+code, {headers:headers});
    }

}