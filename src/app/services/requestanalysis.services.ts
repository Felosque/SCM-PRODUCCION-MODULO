import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class RequestanalysisService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    addRequestanalysis(requestanalysis):Observable<any>{
        let params= JSON.stringify(requestanalysis);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/RequestAnalysis',params,{headers: headers});
    }
    getRequestStates():Observable<any>{
        return this._http.get(this.url+'/RequestStatus');
    }
    getRequestanalysis():Observable<any>{
        return this._http.get(this.url+'/RequestAnalysis');
    }

    getRequestanalyse(RequestAnalysisCode):Observable<any>{
        return this._http.get(this.url+'RequestAnalysis/'+RequestAnalysisCode);
    }

    updateRequestanalysis(code, requestanalysis):Observable<any>{
        let params = JSON.stringify(requestanalysis);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'RequestAnalysis/'+code,params,{headers:headers});
    }

    deleteRequestanalysis(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'RequestAnalysis/'+code, {headers:headers});
    }
}