import { Injectable }      from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CoreService{

    constructor(
            private http: Http){
        }
    
    checkConnectionToBackEndApplication(): Observable<any> {
        let url = "http://localhost:8080/checkBackEndSystem";
        this.http.get(url).map(response => response.json());
        return this.http.get(url).map(response => response.json());
    }

    checkConnectionToBackEndDatabaseServer(): Observable<any> {
        let url = "http://localhost:8080/checkDataBaseSystem";
        this.http.get(url).map(response => response.json());
        return this.http.get(url).map(response => response.json());
    }

}