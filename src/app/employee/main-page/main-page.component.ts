import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

export interface Post {
  title: string
  description: string
  company: string
  date: string
  id?: bigint
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  posts: Post[] = [
    {
      title: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Profisoft",
      date: "1 week ago"
    },
    {
      title: "Junior python developer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Profisoft",
      date: "2 day ago"
    },
    {
      title: "Automation QA",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Epam",
      date: "2 day ago"
    },
    {
      title: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Global logic",
      date: "today"
    },
    {
      title: "C++ Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Softserve",
      date: "today"
    },
    {
      title: "Delivery manager",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Nova Poshta",
      date: "2 day ago"
    },
    {
      title: "Java Engineer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Epam",
      date: "3 day ago"
    },
    {
      title: "Python trainee developer",
      description: "I just returned from the greatest summer vacation! It was so fantastic, I never wanted it to end. I spent eight days in Paris, France. My best friends, Henry and Steve, went with me. We had a beautiful hotel room in the Latin Quarter, and it wasn’t even expensive. We had a balcony with a wonderful view.",
      company: "Profisoft",
      date: "1 month ago"
    }
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  openVacancy() {
    this.route.navigate(['/employee/vacancy/3'])
  }
}
