import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isCVExist: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isCVExist = true;
  }

}
