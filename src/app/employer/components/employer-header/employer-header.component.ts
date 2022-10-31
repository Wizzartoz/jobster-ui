import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {timer} from "rxjs";

@Component({
  selector: 'app-employer-header',
  templateUrl: './employer-header.component.html',
  styleUrls: ['./employer-header.component.css']
})
export class EmployerHeaderComponent implements OnInit {

  btnName = 'Offers'
  isOpen = false;
  isOpenBurgerMenu = false;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  openDropdownMenu() {
    this.isOpen = true;
  }

  closeDropdownMenu() {
    timer(100).subscribe(x => {
      this.isOpen = false;
    })
  }

  openBurgerDropdownMenu() {
    this.isOpenBurgerMenu = !this.isOpenBurgerMenu;
  }

  openMainPage() {
    this.route.navigate(['/employer'])

  }
}
