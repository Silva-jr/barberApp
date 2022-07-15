import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRouting } from './home-routing.module';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { RouterModule } from '@angular/router';
import { AgendamentoConcluidoComponent } from './agendamento-concluido/agendamento-concluido.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomePageRouting),
    FormsModule,
    IonicModule,    
    
    
  ],
  declarations: [HomePage, AgendamentoComponent, AgendamentoConcluidoComponent]
})
export class HomePageModule {}
