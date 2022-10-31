import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  isResponseBlockOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openResponseBlock() {
    this.isResponseBlockOpen = true;
  }

  openEmployer() {
    this.router.navigate(['/employee/employer/profile/2'])
  }
}
