import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  fileName: string | null = null;
  form: any;

  constructor() { }

  ngOnInit(): void {

  }

  downloadFile($event: Event) {
    // @ts-ignore
    this.fileName = $event.target.files[0].name;
  }

  clearFile() {
    this.fileName = null;
    // @ts-ignore
    $event.target.value = null;
  }

  sendResume() {
    
  }
}
