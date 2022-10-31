import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface VacancyCard {
  title: string
  id?: number
}

@Component({
  selector: 'app-employer-vacancy-card',
  templateUrl: './employer-vacancy-card.component.html',
  styleUrls: ['./employer-vacancy-card.component.css']
})
export class EmployerVacancyCardComponent implements OnInit {

  @Input() vacancy : VacancyCard = {title: ""};
  @Output() onDelete : EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }

  deleteVacancy() {
    this.onDelete.emit(this.vacancy.id);
  }
}
