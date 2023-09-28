import { Routes } from '@angular/router';
import { AgendamentoConcluidoComponent } from './agendamento-concluido/agendamento-concluido.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HomePage } from './home.page';
import { AuthGuard } from '../configs/security/auth.guard';

export const HomePageRouting: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'agendamento',
        component: AgendamentoComponent,
      },
       {
        path: 'agendamento/:_id',
        component: AgendamentoComponent,
      },
      {
        path: 'agendamento-concluido',
        component: AgendamentoConcluidoComponent,
      },
    ],
  },
];
