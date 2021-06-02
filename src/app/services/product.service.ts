import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://127.0.0.1:3000/products';

  getProducts(categoryId): Observable<Product[]> {
    let newpath = this.path;
    if (categoryId) {
      newpath += '?categoryId=' + categoryId;
    }

    return this.http.get<Product[]>(newpath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir Hata Oluştu !!!! ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel Bir Hata fatality !!!';
    }
    return throwError(errorMessage);
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path, product,httpOptions).pipe(tap((data => console.log(JSON.stringify(data))),
    catchError(this.handleError)));
  }
}
