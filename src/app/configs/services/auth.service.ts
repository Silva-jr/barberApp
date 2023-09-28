import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthDto, UserDTO } from '../models/users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: UserDTO = {
    _id: null,
    username: null,
    email: null,
    password: null,
    isBarber: null,
  };
  helper = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) {}

  createUser(body: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(
      `${environment.apiUrl}/users`,
      body,
      httpOptions
    );
  }

  login(payload: AuthDto): Observable<AuthDto> {
    return this.http.post<AuthDto>(
      `${environment.apiUrl}/auth/login`,
      payload,
      httpOptions
    );
  }

  async logout() {
    localStorage.removeItem('Token');
    await this.router.navigate(['pages/register']);
  }

  decodeTokne() {
    const decodedToken = this.helper.decodeToken(localStorage.getItem('Token'));
    this.currentUser = decodedToken;
    return this.currentUser;
  }
}
