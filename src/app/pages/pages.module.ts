import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { PagesRoute } from './pages.routing';
import { CadastrarPage } from './cadastrar/cadastrar.page';
import { CadastroConcluidoPage } from './cadastro-concluido/cadastro-concluido.page';
import { AuthService } from '../configs/services/auth.service';

@NgModule({
  declarations: [LoginPage, CadastrarPage, CadastroConcluidoPage],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoute),
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [],
  providers: [],
})
export class PagesModule {}
