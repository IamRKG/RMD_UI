import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {PatientAddService} from "../patientServices/patient-add.service";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  @Output() addToList = new EventEmitter();
  constructor(
    private  patientAddService:PatientAddService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    addProfileForm = new FormGroup({
      patientID: new FormControl(''),
      patientName: new FormControl(''),
      age: new FormControl(''),
      sex: new FormControl(''),
      patientInTime: new FormControl(''),
      dob: new FormControl(''),
      bloodGroup: new FormControl(''),
      contactNo: new FormControl(''),
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
    this.patientAddService.patients.push(this.addProfileForm.value);
    console.log(this.addProfileForm.value)
    this.router.navigate(['/patientList']);
  }

  ngOnInit() {
  }

}
