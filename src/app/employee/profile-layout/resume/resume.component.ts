import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createCV() {
    //check if CV exist
    this.router.navigate(['/employee/profile/resume'])
  }
}
