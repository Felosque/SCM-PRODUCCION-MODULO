import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class StateBranchOfficeService {
    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    addStateBranchOffice(statebranchOffice):Observable<any>{
        let params= JSON.stringify(statebranchOffice);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/StateBranchOffice',params,{headers: headers});
    }

    getStatesBranchOffice():Observable<any>{
        return this._http.get(this.url+'/StateBranchOffice');
    }

    getStateBranchOffice(StateBranchOfficeCode):Observable<any>{
        return this._http.get(this.url+'StateBranchOffice/'+StateBranchOfficeCode);
    }

    updateStateBranchOffice(code, requeststate):Observable<any>{
        let params = JSON.stringify(requeststate);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'StateBranchOffice/'+code,params,{headers:headers});
    }

    deleteStateBranchOffice(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'StateBranchOffice/'+code, {headers:headers});
    }
}