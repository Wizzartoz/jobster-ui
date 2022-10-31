import { Component, OnInit } from '@angular/core';
import {Message} from "../../../components/chat/chat.component";

@Component({
  selector: 'app-employer-chat-layout',
  templateUrl: './employer-chat-layout.component.html',
  styleUrls: ['./employer-chat-layout.component.css']
})
export class EmployerChatLayoutComponent implements OnInit {
  list : Message[] = [{
    message: "привет",
    isFrom: false
  },
    {
      message: "привет",
      isFrom: true
    },
    {
      message: "как ты?",
      isFrom: false
    },
    {
      message: "та нормально , потихоньку , а ты?",
      isFrom: true
    },
    {
      message: "тоже, завтар еду навещать родственников ",
      isFrom: false
    },
    {
      message: "можем поехать вместе , если ты не против",
      isFrom: true
    },
    {
      message: "вапзхъвахпзъхвазп, ок",
      isFrom: false
    },{
      message: "привет",
      isFrom: false
    },
    {
      message: "привет",
      isFrom: true
    },
    {
      message: "как ты?",
      isFrom: false
    },
    {
      message: "та нормально , потихоньку , а ты?",
      isFrom: true
    },
    {
      message: "тоже, завтар еду навещать родственников flkg;ldfgk;ldfgk;ldfgdfgkdfgfgdfgldfkg;ldfkgs;lkfdg;lskdfgl;skfdgl;ksdfl;gks;ldfgk;lsdfgk;lsdfkg;lsdfkg;lskdfg;lskdfg;ldfkgl;sdfkg;lkdfsg ",
      isFrom: false
    },
    {
      message: "можем поехать вместе , если ты не против fl;gk;lsdfkg;lskfgl;kfdgl;kfdsl;gkl;dfgkls;fkgl;sfkdg;oretkoperkglfdkgl;skdfgl;ksdfl;gksdflgk;lsfdkg;lsfkg;lfdgk;ldfg",
      isFrom: true
    },
    {
      message: "вапзхъвахпзъхвазп, ок",
      isFrom: false
    }

  ];


  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(input: HTMLInputElement) {
    console.log(input.value)
    this.list.push({message: input.value, isFrom: true})
    input.value = ''
    window.scrollTo(0, document.documentElement.scrollHeight);
  }

}
