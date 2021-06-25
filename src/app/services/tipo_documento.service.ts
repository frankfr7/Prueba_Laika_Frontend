import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";

@Injectable()
export class TipoDocumentoService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getTiposDocumentos(token: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);
        return this._http.get(this.url + 'tipo_documento', {headers: headers});
    }

    getTipoDocumento(id: any, token: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);
        return this._http.get(this.url + 'tipo_documento/' + id, {headers: headers});
    }

    create(tipodocumento: any, token: any): Observable<any>{
        let json = JSON.stringify(tipodocumento);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.post(this.url + 'tipo_documento', params, {headers: headers});
    }

    update(id: any, tipodocumento: any, token: any): Observable<any>{
        let json = JSON.stringify(tipodocumento);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.put(this.url + 'tipo_documento/' + id, params, {headers:headers});
    }

    delete(id: any, token: any){
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.delete(this.url + 'tipo_documento/' + id, {headers: headers});
    }
}