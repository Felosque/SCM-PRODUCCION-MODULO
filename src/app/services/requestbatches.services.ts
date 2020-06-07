import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Global} from '../services/global'
import { Observable, from } from 'rxjs';
import { StateBranchOffice } from '../model/stateBranchOffice';
@Injectable({
    providedIn: 'root'
})
export class RequestbatchesService {
    public url: string;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    addRequestbatches(requestbatch):Observable<any>{
        let params= JSON.stringify(requestbatch);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/BranchOffice',params,{headers: headers});
    }

    getRequestbatches():Observable<any>{
        return this._http.get(this.url+'/RequestBatches');
    }

   /* getAllStateBranch():Observable<StateBranchOffice[]>{
        return this._http.get<StateBranchOffice[]>(this.url+'/StateBranchOffice');
    }*/

    getRequestbatch(branchofficeId):Observable<any>{
        return this._http.get(this.url+'BranchOffice/'+branchofficeId);
    }

    updateRequestbatch(code, branchoffice):Observable<any>{
        let params = JSON.stringify(branchoffice);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'BranchOffice/'+code,params,{headers:headers});
    }

    deleteRequestbatch(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'BranchOffice/'+code, {headers:headers});
    }
}