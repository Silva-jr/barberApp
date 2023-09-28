import {  Component } from '@angular/core';
import { UserService } from '../configs/services/user.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserDTO } from '../configs/models/users';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userData: any;
  barbersData: UserDTO[];
  constructor(
    private userService: UserService,
  ) {}

  ionViewWillEnter() {
    this.getUser();
    this.getBarbers();
  }

  getUser() {
    this.userService
      .getUserLogged()
      .pipe(
        catchError((error) => {
          return throwError('algo deu errado');
        })
      )
      .subscribe((data) => {
        this.userData = data;
        console.log(data);
      });
  }

  getBarbers() {
    this.userService
      .getBarbers()
      .pipe(
        catchError((error) => {
          return throwError('algo deu errado');
        })
      )
      .subscribe((data: UserDTO[]) => {
        this.barbersData = data;        
        console.log(this.barbersData);
      });
  }
}
