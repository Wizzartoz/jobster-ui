import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

export interface Candidate {
  position: string
  description: string
  salary: number
  experience: number
  date: string
  id?: bigint
}

@Component({
  selector: 'app-employer-main-layout',
  templateUrl: './employer-main-layout.component.html',
  styleUrls: ['./employer-main-layout.component.css']
})
export class EmployerMainLayoutComponent implements OnInit {

  candidates: Candidate[] = [
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    },
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    },
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    },
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    },
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    },
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    },
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    },
    {
      position: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      salary: 4000,
      experience: 2,
      date: "1 week ago"
    }
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openCandidate() {
    this.route.navigate(['/employer/candidate/2'])
  }
}
