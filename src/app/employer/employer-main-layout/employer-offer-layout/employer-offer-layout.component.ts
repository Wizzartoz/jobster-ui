import { Component, OnInit } from '@angular/core';
import {Chat} from "../../../employee/offer-layout/offer-layout.component";

@Component({
  selector: 'app-employer-offer-layout',
  templateUrl: './employer-offer-layout.component.html',
  styleUrls: ['./employer-offer-layout.component.css']
})
export class EmployerOfferLayoutComponent implements OnInit {

  chats: Chat[] = [
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
    {company: 'Epam',
      vacancy: 'Java Engineer'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
