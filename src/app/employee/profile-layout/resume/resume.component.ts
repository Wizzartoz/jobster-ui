import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ProfileEmployeeService} from "../../../services/profile-employee.service";
import {TokenStorageService} from "../../../services/token-storage.service";
import {EmployeeProfile} from "../../../interfaces/employee-profile";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  employeeId: bigint | null = null;
  form: FormGroup = new FormGroup<any>({
    name: new FormControl(""),
    surname: new FormControl(""),
    email: new FormControl(""),
    git: new FormControl(""),
    linkedin: new FormControl(""),
    aboutMe: new FormControl("")
  });

  constructor(private router: Router, private profileService: ProfileEmployeeService, private storage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.profileService.getEmployeeProfile(this.storage.getUsername()).subscribe(
      (profile) => {
        // @ts-ignore
        this.employeeId = profile.employeeId
        this.form.setValue({
          name: profile.name,
          // @ts-ignore
          surname: profile.surname,
          // @ts-ignore
          email: profile.email,
          // @ts-ignore
          git: profile.git,
          // @ts-ignore
          linkedin: profile.linkedin,
          // @ts-ignore
          aboutMe: profile.aboutMe
        })
      },
      () => console.log("Error")
    );
  }

  createCV() {
    this.router.navigate(['/employee/profile/resume'])
  }

  sendProfile() {
    let profile = <EmployeeProfile>{
      employeeId: this.employeeId,
      name: this.form.get("name")?.value,
      surname: this.form.get("surname")?.value,
      email: this.form.get("email")?.value,
      git: this.form.get("git")?.value,
      linkedin: this.form.get("linkedin")?.value,
      aboutMe: this.form.get("aboutMe")?.value
    }
    this.profileService.updateEmployeeProfile(profile, this.storage.getUsername()).subscribe(
      () => {
        this.updateForm(profile);
      },
      () => console.log("Error"),
      () => window.location.reload()
    )
  }

  updateForm(profile: EmployeeProfile) {
      this.form.patchValue({
        employeeId: profile.employeeId,
        name: profile.name,
        surname: profile.surname,
        email: profile.email,
        git: profile.git,
        linkedin: profile.linkedin,
        aboutMe: profile.aboutMe
      })
  }
}
