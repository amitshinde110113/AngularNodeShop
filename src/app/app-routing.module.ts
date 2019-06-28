import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'signup' , component: SignupComponent},
  {path:'login' , component: LoginComponent},
  {path:'userPage' , component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
