import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_API: string = 'http://skillplus.germanywestcentral.cloudapp.azure.com:1337/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(user: User) {
    const data = { "identifier": user.identifier, "password": user.password };

    return this.http.post<any>(`${this.AUTH_API}/local`, data)
      .subscribe(
        (res: any) => {   
          this.router.navigate(['feed/news-feed']);
              
          if(res.jwt) {
            localStorage.setItem('access_token', res.jwt)
            return true;
          }

          return false;
      },
      (err: any) => {
        if(err) {
          console.log(err, 'err');
          return false
        }
        return false;
      }
    )
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  deleteToken() {
    localStorage.clear();
    sessionStorage.clear();
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    
    return (authToken !== null) ? true : false;
  }

  handleError(error: HttpErrorResponse) {
    let message = '';

    if (error.error instanceof ErrorEvent) {
      message = error.error.message;
    } else {
      message = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(message);
  }
}
