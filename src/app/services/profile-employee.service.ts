import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeProfile} from "../interfaces/employee-profile";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileEmployeeService {

  constructor(private http: HttpClient) {
  }

  getEmployeeProfile(login: string): Observable<EmployeeProfile | Error> {
    return this.http.get<EmployeeProfile | Error>(environment.url + "/profile/" + login);
  }

  updateEmployeeProfile(profile: EmployeeProfile, login: string) {
    return this.http.post(environment.url + "/profile/" + login, profile);
  }

}

