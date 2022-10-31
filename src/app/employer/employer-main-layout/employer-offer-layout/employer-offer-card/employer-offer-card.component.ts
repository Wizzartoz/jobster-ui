import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../../../employee/offer-layout/offer-layout.component";

@Component({
  selector: 'app-employer-offer-card',
  templateUrl: './employer-offer-card.component.html',
  styleUrls: ['./employer-offer-card.component.css']
})
export class EmployerOfferCardComponent implements OnInit {
  @Input() chat : Chat = {
    company: "",
    vacancy: ""
  }

  constructor() { }

  ngOnInit(): void {
  }
}
