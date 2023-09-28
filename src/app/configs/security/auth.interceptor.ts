import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('True')
    this.spinner.isLoading.next(true);
    const token = localStorage.getItem('Token');
    if (token) {
      console.log('True')
      const newReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(newReq).pipe(
        finalize(() => {
          
          this.spinner.isLoading.next(false);
        })
      );
    } else {
      return next.handle(request).pipe(
        finalize(() => {
          this.spinner.isLoading.next(false);
        })
      );
    }
  }
}
