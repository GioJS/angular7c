import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthIterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqAux = req.clone({params: req.params.set('auth', this.authService.getToken())});
    console.log(reqAux);
    return next.handle(reqAux);
  }
}
