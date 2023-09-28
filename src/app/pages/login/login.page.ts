import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/configs/models/users';
import { AuthService } from 'src/app/configs/services/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  register: FormGroup;
  loading: boolean = false;
  currentUser: UserDTO = new UserDTO();
  constructor(
    private authService: AuthService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.register = this.formbuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loading = true;
    this.authService
      .login(this.register.value)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError('Algo deu errado. Tente novamente mais tarde.');
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('Token', data.access_token);
        this.currentUser = this.authService.decodeTokne();
        this.loading = false;
        this.route.navigate(['/']);
      });
  }
}
