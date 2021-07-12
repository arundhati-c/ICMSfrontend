import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { CompanyService } from './services/company.service';
import { UserService } from './services/user.service';
import { CompaniesComponent } from './components/companies/companies.component';
import { CurrentuserComponent } from './components/currentuser/currentuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompaniesComponent,
    CurrentuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
