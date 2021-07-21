import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'login', component : LoginComponent },
  { path : 'AddCompanies', component :  AddCompanyComponent},
  { path : 'ListCompanies', component :  ListCompanyComponent},
  { path : "*", component : PageNotFoundComponent},
  { path : 'navbar', component : NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  AddCompanyComponent,
  PageNotFoundComponent,
  ListCompanyComponent
];
