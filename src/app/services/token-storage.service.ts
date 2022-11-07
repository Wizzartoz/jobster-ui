import {Injectable} from "@angular/core";

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({providedIn: "root"})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: any) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: any) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): any {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: any) {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, authorities);
  }

  public getAuthorities(): any {
    return localStorage.getItem(AUTHORITIES_KEY);
  }

  public storageClear() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.removeItem(AUTHORITIES_KEY);
  }

}
