import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TableService
     {         
         
    constructor(
       private http: HttpClient) {
          
    }

    getData(fuentaDatos:string): Observable<any> {
        return this.http.get('assets/json/tables/'+fuentaDatos);
    }

}

export interface ApiResult<T> {
    data: T[];
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    sortColumn: string;
    sortOrder: string;
    filterColumn: string;
    filterQuery: string;
}
