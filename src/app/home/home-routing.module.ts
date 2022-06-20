import { Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HomePage } from './home.page';

export const HomePageRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'agendamento',
        component: AgendamentoComponent,
      },
      
    ],
  },
];