import { Component, OnInit} from '@angular/core';
import  {PatientFormControls} from "../form-Controls/PatientFormControls";
import {UpdatePatientSharedServiceService} from "../sharedServices/update-patient-shared-service.service"
import {Patients} from "../patientInterface/patientsInterface";
import {PatientAddService} from "../patientServices/patient-add.service"

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient:Patients
  constructor(
    private updatePatientSharedServiceService:UpdatePatientSharedServiceService,
    private patientAddService:PatientAddService
  ) { }

  patientFormControls = new PatientFormControls;
  updatePatientForm = this.patientFormControls.getPatientFormControls();

  displayPatientDetails(){
    this.updatePatientSharedServiceService.getPatient().subscribe(patient => console.log(patient) );
  }

  save(){
    this.patientAddService.updatePatient(this.updatePatientForm.value).subscribe(successMsg => console.log(successMsg));
  }

  ngOnInit() {
  this.displayPatientDetails();
  }


}
