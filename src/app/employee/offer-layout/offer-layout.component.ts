import { Component, OnInit } from '@angular/core';

export interface Chat {
  company: string,
  vacancy:string
}
@Component({
  selector: 'app-offer-layout',
  templateUrl: './offer-layout.component.html',
  styleUrls: ['./offer-layout.component.css']
})
export class OfferLayoutComponent implements OnInit {

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
