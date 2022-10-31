import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../main-page.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post : Post = {
    title: "",
    description: "",
    company: "",
    date: ""
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
