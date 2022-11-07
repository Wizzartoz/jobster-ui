import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterForm} from "../register/register.component";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {TokenStorageService} from "./token-storage.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

export interface Error {
  message: string
}

export interface JWTResponse {
  token: string
  login: string
  role: string
}

export interface LoginForm {
  login: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storage: TokenStorageService, private jwtHelper: JwtHelperService,
              private router: Router) {
  }

  public register(form: RegisterForm): Observable<JWTResponse | Error> {
    return this.http.post<JWTResponse | Error>(environment.url + "/auth/register", form);
  }


  public login(form: LoginForm): Observable<JWTResponse | Error> {
    return this.http.post<JWTResponse | Error>(environment.url + "/auth/login", form);
  }

  public logout() {
    this.storage.storageClear();
    this.router.navigate(['']);
  }


  public isAuthenticate(): boolean {
    let token = this.storage.getToken();
    return token && !this.jwtHelper.isTokenExpired(token);
  }
}
