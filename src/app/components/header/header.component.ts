import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  btnName = 'Offers'
  isOpen = false;
  isOpenBurgerMenu = false;

  constructor(private route: Router, private auth: AuthService) {
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

  logout() {
    this.auth.logout();
  }
}
