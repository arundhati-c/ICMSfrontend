import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyService } from './services/company.service';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlacementDriveComponent } from './components/add-placement-drive/add-placement-drive.component';
import { PlacementDrivesComponent } from './components/placement-drives/placement-drives.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ListCompanyComponent } from './components/list-company/list-company.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddPlacementDriveComponent,
    PlacementDrivesComponent,
    NavbarComponent,
    ListCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    CompanyService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
