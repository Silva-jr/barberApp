import { Routes } from '@angular/router';
import { AgendamentoConcluidoComponent } from './agendamento-concluido/agendamento-concluido.component';
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
      },{
        path: 'agendamento-concluido',
        component: AgendamentoConcluidoComponent
      }
      
    ],
  },
];