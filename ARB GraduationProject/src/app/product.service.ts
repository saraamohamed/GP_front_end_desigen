
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'http://localhost/dash/preselect';

  constructor(private http: HttpClient) { }

  uploadImage(formData) {
    return ajax.post(`${this.apiUrl}api/upload`, formData);
  }

  deleteImage(formData) {
    return this.http.post<any>(`${this.apiUrl}api/deleteImage`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  saveProduct(formData) {
    return this.http.post<any>(`${this.apiUrl}api/saveProduct`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}

