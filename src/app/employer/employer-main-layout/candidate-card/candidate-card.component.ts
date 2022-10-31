import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.css']
})
export class CandidateCardComponent implements OnInit {

  isResponseBlockOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openResponseBlock() {
    this.isResponseBlockOpen = true;
  }

  openProfile() {
    this.router.navigate(['/employer/candidate/profile/3'])
  }
}
