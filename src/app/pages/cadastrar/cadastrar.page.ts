import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDTO } from 'src/app/configs/models/users';
import { AuthService } from 'src/app/configs/services/auth.service';

@Component({
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  loading: boolean = false;
  register: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  createUser() {
    this.authService
      .createUser(this.register.value)
      .pipe(
        catchError((error) => {
          console.log(error);
          this.loading = false;
          return throwError('Algo deu errado. Tente novamente mais tarde.');
          
        })
      )
      .subscribe((data: UserDTO) => {
        console.log(data);
        this.loading = false;
        this.route.navigate(['../pages/cadastro-concluido']);
        //[routerLink]="['../cadastro-concluido']" 
      });
  }
}
