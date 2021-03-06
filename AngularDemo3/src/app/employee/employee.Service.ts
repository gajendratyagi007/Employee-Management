﻿import { Injectable } from '@angular/core';
import { IEmployee } from './employeeInterface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class employeeService {

    constructor(private _http: Http){}

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:30941/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
           
    }

    getEmployeeByCode(empCode: Number): Observable<IEmployee> {
        return this._http.get("http://localhost:30941/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);

    }
    handleError(error: Response) {
        console.error(error)
        return Observable.throw(error);
    }
}