import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page/home-page.component";
import {HomePageLayoutComponent} from "./home-page-layout/home-page-layout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {
    path: '', component: HomePageLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register/:who', component: RegisterComponent},
      {path: 'about', component:AboutComponent},
    ]
  },
  {path: 'employee', loadChildren: ()=> import('./employee/employee.module').then(m=>m.EmployeeModule)},
  {path: 'employer', loadChildren: ()=> import('./employer/employer.module').then(m=>m.EmployerModule)},
  {path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

