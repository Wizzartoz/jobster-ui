import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { EmployerMainLayoutComponent } from './employer-main-layout/employer-main-layout.component';
import { EmployerCardComponent } from './employer-main-layout/employer-card/employer-card.component';
import {EmployerFilterComponent} from "./employer-main-layout/employer-filter/employer-filter.component";
import {SharedModule} from "../shared/shared.module";
import { EmployerHeaderComponent } from './components/employer-header/employer-header.component';
import { CandidateCardComponent } from './employer-main-layout/candidate-card/candidate-card.component';
import { EmployerOfferLayoutComponent } from './employer-main-layout/employer-offer-layout/employer-offer-layout.component';
import { EmployerOfferCardComponent } from './employer-main-layout/employer-offer-layout/employer-offer-card/employer-offer-card.component';
import { EmployerChatLayoutComponent } from './employer-main-layout/employer-chat-layout/employer-chat-layout.component';
import { EmployerMessageComponent } from './employer-main-layout/employer-chat-layout/employer-message/employer-message.component';
import { EmployerProfileLayoutComponent } from './employer-main-layout/employer-profile-layout/employer-profile-layout.component';
import { CompanyCreateFormComponent } from './employer-main-layout/employer-profile-layout/company-create-form/company-create-form.component';
import { CompanyFormComponent } from './employer-main-layout/employer-profile-layout/company-form/company-form.component';
import { EmployerVacancyCardComponent } from './employer-main-layout/employer-profile-layout/company-create-form/employer-vacancy-card/employer-vacancy-card.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';



@NgModule({
  declarations: [
    EmployerMainLayoutComponent,
    EmployerCardComponent,
    EmployerFilterComponent,
    EmployerHeaderComponent,
    CandidateCardComponent,
    EmployerOfferLayoutComponent,
    EmployerOfferCardComponent,
    EmployerChatLayoutComponent,
    EmployerMessageComponent,
    EmployerProfileLayoutComponent,
    CompanyCreateFormComponent,
    CompanyFormComponent,
    EmployerVacancyCardComponent,
    EmployeeProfileComponent
  ],
  exports: [
    EmployerHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: EmployerMainLayoutComponent},
      {path: 'candidate/:id', component: CandidateCardComponent},
      {path: 'offers', component: EmployerOfferLayoutComponent},
      {path: 'chat', component: EmployerChatLayoutComponent},
      {path: 'candidate/profile/:id', component: EmployeeProfileComponent},
      {
        path: 'profile', component: EmployerProfileLayoutComponent, children: [
          {path: '', component: CompanyFormComponent},
          {path: 'create-vacancy', component: CompanyCreateFormComponent}
        ]
      }
    ]),
    SharedModule
  ]
})
export class EmployerModule { }
