import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PatientProfileModule} from "./patient-profile/patient-profile.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule,MatButtonModule,MatGridListModule,MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {PatientListComponent} from "./patient-profile/patient-list/patient-list.component";
import {AddPatientComponent} from "./patient-profile/add-patient/add-patient.component";




const appRoutes: Routes = [
  {
    path: 'add',
    component: AddPatientComponent
  },
  {
    path: 'patientList',
    component: PatientListComponent
  },
  { path: '',
    redirectTo: '/patientList',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PatientProfileModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
