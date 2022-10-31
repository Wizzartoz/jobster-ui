import {Component, OnInit} from '@angular/core';
import {VacancyCard} from "./employer-vacancy-card/employer-vacancy-card.component";

@Component({
  selector: 'app-company-create-form',
  templateUrl: './company-create-form.component.html',
  styleUrls: ['./company-create-form.component.css']
})
export class CompanyCreateFormComponent implements OnInit {

  vacancies: VacancyCard[] = [
    {title: 'Java Software Engineer', id: 1},
    {title: 'Trainee C++ Developer', id: 2}
  ]

  constructor() {
  }

  ngOnInit(): void {

  }


  deleteVacancy($event: number) {
     this.vacancies =  this.vacancies.filter(vacancy=>vacancy.id !== $event)
  }
}
