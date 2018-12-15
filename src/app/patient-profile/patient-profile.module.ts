import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import {MatListModule, MatRippleModule, MatDividerModule, MatFormFieldModule, MatInputModule,MatCardModule,MatButtonModule} from '@angular/material';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule

  ],
  exports:[
    PatientListComponent
  ],
  declarations: [PatientListComponent, PatientSearchComponent, AddPatientComponent]
})
export class PatientProfileModule {}
