import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  registered: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz_eHrYEpnuR8l3tLLIY-tP7VIqt8RqMM',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz_eHrYEpnuR8l3tLLIY-tP7VIqt8RqMM',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
