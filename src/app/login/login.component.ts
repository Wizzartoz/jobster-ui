import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string | null = null;
  form: FormGroup = new FormGroup<any>({
    login: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)])
  });

  constructor(private service: AuthService, private storage: TokenStorageService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.storage.storageClear();
    this.service.login({
      login: this.form.get("login")?.value,
      password: this.form.get("password")?.value
    }).subscribe(
      (value) => {
        // @ts-ignore
        this.storage.saveToken(value.token)
        // @ts-ignore
        this.storage.saveUsername(value.login)
        // @ts-ignore
        this.storage.saveAuthorities(value.role)
      },
      () => this.error = "Login or password wrong",
      () => window.location.reload()
    )
  }
}
