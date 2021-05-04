import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  userAuthentication: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  registerUser(
    email: string,
    password: string,
    returnSecureToken: boolean
  ): Observable<any> {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
        {
          email: email,
          password: password,
          returnSecureToken: returnSecureToken,
        },
        {
          params: new HttpParams().append(
            'key',
            'AIzaSyDcj3TiaDs7Ss-6-3ljH9WloPRn3K__wfs'
          ),
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData: AuthResponse) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.registered,
            responseData.idToken,
            responseData.refreshToken,
            responseData.expiresIn
          );
        })
      );
  }

  loginUser(email: string, password: string, returnSecureToken: boolean) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
        {
          email: email,
          password: password,
          returnSecureToken: returnSecureToken,
        },
        {
          params: new HttpParams().append(
            'key',
            'AIzaSyDcj3TiaDs7Ss-6-3ljH9WloPRn3K__wfs'
          ),
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData: AuthResponse) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.registered,
            responseData.idToken,
            responseData.refreshToken,
            responseData.expiresIn
          );
        })
      );
  }

  handleAuthentication(
    email: string,
    localId: string,
    registered: boolean,
    tokenId: string,
    refreshToken: string,
    expirationDate: string
  ) {
    let expiryDate = new Date(new Date().getTime() + +expirationDate * 1000);
    const user = new User(
      email,
      localId,
      registered,
      tokenId,
      refreshToken,
      expiryDate
    );
    this.userAuthentication.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.router.navigate(['recipes'])
  }

  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'Unknown Error Occurred.';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'EMAIL_EXISTS':
        errorMessage =
          'The email address is already in use by another account.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
    }
    return throwError(errorMessage);
  }

  logout() {
    this.userAuthentication.next(null);
    this.router.navigate(['auth']);
    localStorage.clear();
  }

  autoLogin() {
    const userData: {
      email: string;
      localId: string;
      registered: string;
      _idToken: string;
      _refreshToken: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    console.log(userData);

    if (!userData) {
      this.router.navigate(['auth']);
    }

    const user = new User(
      userData.email,
      userData.localId,
      userData.registered == 'true',
      userData._idToken,
      userData._refreshToken,
      new Date(userData._tokenExpirationDate)
    );

    if (user.token) {
      this.userAuthentication.next(user);
    }
  }
}
