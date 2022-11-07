import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from "../services/token-storage.service";

const TOKEN_HEADER_KEY = "Authorization"

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

  constructor(private storage: TokenStorageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    const token = this.storage.getToken();
    if (token != null) {
      authReq = request.clone({headers: request.headers.set(TOKEN_HEADER_KEY, "Bearer " + token)});
    }
    return next.handle(authReq);
  }

}

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true}
];
