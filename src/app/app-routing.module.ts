import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PerfilPage } from './perfil/perfil.page';
import { CadastroConcluidoPage } from './shared/cadastro-concluido/cadastro-concluido.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./shared/splash/splash.module').then((m) => m.SplashModule),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'cadastro-concluido',
    component: CadastroConcluidoPage
  },
  {
    path: 'perfil',
    component: PerfilPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
