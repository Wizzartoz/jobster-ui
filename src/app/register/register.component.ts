import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/token-storage.service";
import {ActivatedRoute} from "@angular/router";

export interface RegisterForm {
  login: string
  password: string
  email: string
  role: string

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup<any>({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)]),
    email: new FormControl('', Validators.email)
  });

  error: string | null = null;

  role: string = "";

  isEmployee : boolean = false;

  constructor(private service: AuthService, private storage: TokenStorageService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      // @ts-ignore
      this.isEmployee = params.who === "employee"
      // @ts-ignore
      this.role = (params.who === "employee") ? "ROLE_EMPLOYEE" : "ROLE_EMPLOYER"
    })
  }

  register() {
    this.storage.storageClear();
    this.service.register({
      login: this.form.get("login")?.value,
      password: this.form.get("password")?.value,
      email: this.form.get("email")?.value,
      role: this.role
    }).subscribe(value => {
        // @ts-ignore
        this.storage.saveUsername(value.login)
        // @ts-ignore
        this.storage.saveToken(value.token)
        // @ts-ignore
        this.storage.saveAuthorities(value.role)
      },
      error => this.error = error,
      () => window.location.reload());
  }
}
