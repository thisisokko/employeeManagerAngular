import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = 'http://127.0.0.1:3000/categories';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err:HttpErrorResponse) {
    let errorMessage=""
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir Hata Oluştu !!!! "+err.error.message;
    }
    else{
      errorMessage='Sistemsel Bir Hata fatality !!!'
    }
    return throwError(errorMessage);
  }
}
