import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError,map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token'
    }),
  };
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getMannamentCars(){
    const url = `${this.REST_API_SERVER}/cars`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getMannamentCar(carId){
    const url = `${this.REST_API_SERVER}/cars/` + carId;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public addMannamentCars(data){
    const url = `${this.REST_API_SERVER}/cars`;
    return this.httpClient
    .post<any>(url,data, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public modiflyCars(carId:number, data){
    const url = `${this.REST_API_SERVER}/cars`+carId;
    return this.httpClient
    .put<any>(url,data, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public deleteMannamentCars(carId){
    const url = `${this.REST_API_SERVER}/cars/`+carId;
    return this.httpClient.delete<any>(url)
    .pipe(catchError(this.handleError));
  }

  public getProfile(){
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getComments(){
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public getPosts(){
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  public addPosts(data){
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
    .post<any>(url,data, this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
