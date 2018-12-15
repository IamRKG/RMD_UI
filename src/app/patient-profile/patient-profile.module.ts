import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule

  ],
  exports:[
    PatientListComponent
  ],
  declarations: [PatientListComponent, PatientSearchComponent]
})
export class PatientProfileModule {}
