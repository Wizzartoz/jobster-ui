import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isEmployee = false

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.isEmployee = (params['who'] === 'employee'))
  }

  changeLeftBtn() {
    this.isEmployee = false;
  }

  changeRightBtn() {
    this.isEmployee = true;
  }
}
