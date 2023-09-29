import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendadoPageRoutingModule } from './agendado-routing.module';

import { AgendadoPage } from './agendado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendadoPageRoutingModule
  ],
  declarations: [AgendadoPage]
})
export class AgendadoPageModule {}
