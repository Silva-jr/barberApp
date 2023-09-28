import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('Token')) {
      return true;
    } else {      
      this.router.navigate(['pages/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }

  async errorCompra() {
    const toast = await this.toastController.create({
      header: 'Erro!',
      message: 'Algo inesperado aconteceu, por favor tente novamente.',
      duration: 2000,
      color: 'danger',
      icon: 'bug',
      position: 'top',
      keyboardClose: true,
    });
    await toast.present();
  }
}

