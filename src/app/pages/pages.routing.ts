import { Routes } from '@angular/router';
import { CadastrarPage } from './cadastrar/cadastrar.page';
import { CadastroConcluidoPage } from './cadastro-concluido/cadastro-concluido.page';
import { LoginPage } from './login/login.page';

export const PagesRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: 'cadastrar',
        component: CadastrarPage
      },  
      {
        path: 'cadastro-concluido',
        component: CadastroConcluidoPage
      }
    ],
  },
];
