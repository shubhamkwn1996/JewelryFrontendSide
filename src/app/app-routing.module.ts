import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationComponent } from './estimation/estimation.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path :'login', component: LoginComponent},
  {path :'estimation', component: EstimationComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
