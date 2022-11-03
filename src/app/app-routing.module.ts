import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page/home-page.component";
import {HomePageLayoutComponent} from "./home-page-layout/home-page-layout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AboutComponent} from "./about/about.component";
import {ErrorComponent} from "./error/error.component";
import {AuthGuard} from "./guards/auth.guard";
import {CheckForEmployeeGuard} from "./guards/check-for-employee.guard";
import {CheckForEmployerGuard} from "./guards/check-for-employer.guard";
import {RoutingByRoleGuard} from "./guards/routing-by-role.guard";

const routes: Routes = [
  {
    path: '', component: HomePageLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'login', component: LoginComponent, canActivate: [RoutingByRoleGuard]},
      {path: 'register/:who', component: RegisterComponent,canActivate: [RoutingByRoleGuard]},
      {path: 'about', component:AboutComponent},
    ]
  },
  {path: 'employee', loadChildren: ()=> import('./employee/employee.module').then(m=>m.EmployeeModule), canActivate: [
    AuthGuard,CheckForEmployeeGuard
    ],canActivateChild:[AuthGuard]},
  {path: 'employer', loadChildren: ()=> import('./employer/employer.module').then(m=>m.EmployerModule), canActivate: [
    AuthGuard, CheckForEmployerGuard
    ], canActivateChild: [AuthGuard]},
  {path: '**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

