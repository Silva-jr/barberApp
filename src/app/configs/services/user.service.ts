import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../models/users';
import { tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  dataUsers: any;
  constructor(private http: HttpClient) {}

  getUserLogged() {
    return this.http.get<UserDTO>(`${environment.apiUrl}/users/user/logado`);
  }

  getBarbers() {
    return this.http.get(`${environment.apiUrl}/users/user/barbers`);
  }

  fetchData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/user/barbers`)
    .pipe(
      tap((data) => {
        this.dataUsers = data;
        console.log(this.dataUsers)
      })
    );
  }

   getBarbersById(id: string) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

}
