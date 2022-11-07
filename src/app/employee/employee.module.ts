import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from "@angular/router";
import { FilterComponent } from './main-page/components/filter/filter.component';
import { CardComponent } from './main-page/components/card/card.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { OfferLayoutComponent } from './offer-layout/offer-layout.component';
import { OfferCardComponent } from './offer-layout/offer-card/offer-card.component';
import {ChatComponent} from "../components/chat/chat.component";
import {MessageComponent} from "../components/chat/message/message.component";
import { ProfileComponent } from './profile-layout/profile.component';
import { MyProfileComponent } from './profile-layout/my-profile/my-profile.component';
import { ResumeComponent } from './profile-layout/resume/resume.component';
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "../components/header/header.component";
import { EmployerCardProfileComponent } from './employer-card-profile/employer-card-profile.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainPageComponent,
    FilterComponent,
    CardComponent,
    VacancyComponent,
    OfferLayoutComponent,
    OfferCardComponent,
    ChatComponent,
    MessageComponent,
    ProfileComponent,
    MyProfileComponent,
    ResumeComponent,
    HeaderComponent,
    EmployerCardProfileComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {path: '', component: MainPageComponent},
            {path: 'vacancy/:id', component: VacancyComponent},
            {path: 'offers', component: OfferLayoutComponent},
            {path: 'chat', component: ChatComponent},
            {path: 'employer/profile/:id', component: EmployerCardProfileComponent},
            {
                path: 'profile', component: ProfileComponent, children: [
                    {path: '', component: ResumeComponent},
                    {path: 'resume', component: MyProfileComponent}
                ]
            }
        ]),
        ReactiveFormsModule,
    ],
  exports: [
    RouterModule,
    OfferLayoutComponent,
    OfferCardComponent
  ]
})
export class EmployeeModule { }
