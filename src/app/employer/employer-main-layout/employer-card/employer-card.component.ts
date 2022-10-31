import {Component, Input, OnInit} from '@angular/core';
import {Candidate} from "../employer-main-layout.component";

@Component({
  selector: 'app-employer-card',
  templateUrl: './employer-card.component.html',
  styleUrls: ['./employer-card.component.css']
})
export class EmployerCardComponent implements OnInit {

  @Input() candidate : Candidate = {
    position: "",
    description: "",
    salary: 0,
    experience: 0,
    date: ""
  };

  constructor() { }

  ngOnInit(): void {
  }
}
