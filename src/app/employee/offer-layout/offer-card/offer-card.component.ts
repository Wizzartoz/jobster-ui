import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../offer-layout.component";

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input() chat : Chat = {
    company: "",
    vacancy: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
