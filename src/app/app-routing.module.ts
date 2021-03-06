import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddPlacementDriveComponent } from './components/add-placement-drive/add-placement-drive.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { LoginComponent } from './components/login/login.component';
import { PlacementDrivesComponent } from './components/placement-drives/placement-drives.component';



const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'addCompany', component :  AddCompanyComponent},
  { path : 'viewCompanies', component :  CompaniesComponent},
  { path : 'viewCompanies/:name', component :  CompanyDetailsComponent},
  { path : 'addDrive', component : AddPlacementDriveComponent },
  { path : 'viewDrives', component : PlacementDrivesComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  AddCompanyComponent,
  AddPlacementDriveComponent,
  CompaniesComponent,
  CompanyDetailsComponent,
  PlacementDrivesComponent
];
