import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {PatientAddService} from "../patientServices/patient-add.service";


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient = [ ]

  @Output() addToList = new EventEmitter();
  constructor(private  patientAddService:PatientAddService) { }

    addProfileForm = new FormGroup({
      patientName: new FormControl(''),
      age: new FormControl(''),
      sex: new FormControl(''),
      patientInTime: new FormControl(''),
      dob: new FormControl(''),
      bloodGroup: new FormControl(''),
      mobileNumber: new FormControl(''),
      patientAddress: new FormControl(''),
      emailAddress: new FormControl(''),
      doctorsName: new FormControl(''),
      speciality: new FormControl(''),
      patientHeight: new FormControl(''),
      patientWeight: new FormControl(''),
      patientBP: new FormControl(''),
      patientPulse: new FormControl(''),
      patientTemperature: new FormControl(''),
      patientSPO: new FormControl(''),
      patientRP: new FormControl(''),
      patientClinicalHistory: new FormControl(''),
      diagnosisProvisional: new FormControl(''),
      treatmentsProcedures: new FormControl(''),
      notes: new FormControl(''),
      treatment: new FormControl(''),
      investigation: new FormControl(''),
      review: new FormControl(''),
      amount: new FormControl('')



    });

  addPatient(){
    this.patient.push(this.addProfileForm.value);
    return this.patient;
    //this.patientAddService.getPatient(this.addProfileForm);
  }

  ngOnInit() {
  }

}
