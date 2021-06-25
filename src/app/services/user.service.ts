import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";

@Injectable()
export class UserService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    getUsers(token: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);
        return this._http.get(this.url + 'usuarios', {headers: headers});
    }

    getUser(id: any, token: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);
        return this._http.get(this.url + 'usuarios/' + id, {headers: headers});
    }

    create(user: any, token: any): Observable<any>{
        let json = JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.post(this.url + 'usuarios', params, {headers: headers});
    }

    update(id: any, user: any, token: any): Observable<any>{
        let json = JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.put(this.url + 'usuarios/' + id, params, {headers:headers});
    }

    delete(id: any, token: any){
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.delete(this.url + 'usuarios/' + id, {headers: headers});
    }
}