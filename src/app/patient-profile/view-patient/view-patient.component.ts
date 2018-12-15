import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  patient = {
    "PatientID":"0422",
    "PatientName":"Ramu",
    "Age":"12/12/1980",
    "contactNo":"9584715311",
    "IPNo":"0148",
    "bloodGroup":"O Positive",
    "address":"Velcahery,Chennai",
    "emailAddress":"ramc90@gmail.com",
    "doctorName":"Karthick",
    "speciality":"Cardiology",
    "PaitentClinicalHistory":"Alergic to Milk",
    "treatmentsProcedures":"Admit to hospital",
    "diagnosisProvisional":"Fever",
    "Notes":"NA",
    "treatment":"Tabltes",
    "investigation":"Blood test",
    "reviewAdvise":"Come after 5 days",
    "Amount":"2000",
    "consent":"NA"
  }
  constructor() { }

  ngOnInit() {

   this.patient

  }

}
