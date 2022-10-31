import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
    this.route.navigate(['/employee'])

  }
}
