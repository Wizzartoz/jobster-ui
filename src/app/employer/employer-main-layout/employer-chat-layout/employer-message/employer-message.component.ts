import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employer-message',
  templateUrl: './employer-message.component.html',
  styleUrls: ['./employer-message.component.css']
})
export class EmployerMessageComponent implements OnInit {

  @Input() message: string = ""
  @Input() isFrom  = false;

  constructor() { }

  ngOnInit(): void {
  }

}
