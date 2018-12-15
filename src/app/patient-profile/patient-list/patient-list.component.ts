import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patient = [{
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
  },{
    "PatientID":"0423",
    "PatientName":"Somu",
    "Age":"10/05/1995",
    "contactNo":"8072267823",
    "IPNo":"0149",
    "bloodGroup":"B Positive",
    "address":"Plot No 5, Velachery, chennai",
    "emailAddress":"somu@rmd.com",
    "doctorName":"Vasu",
    "speciality":"Nurology",
    "PaitentClinicalHistory":"NA",
    "treatmentsProcedures":"Home care",
    "diagnosisProvisional":"Cancer",
    "Notes":"NA",
    "treatment":"Paliative care",
    "investigation":"Blood test",
    "reviewAdvise":"Vist after 2 months",
    "Amount":"100",
    "consent":"NA"
  },{
    "PatientID":"0424",
    "PatientName":"Kumar",
    "Age":"10/05/1975",
    "contactNo":"8074447823",
    "IPNo":"0150",
    "bloodGroup":"A Positive",
    "address":"Plot No 5, Perungudi, chennai",
    "emailAddress":"somu@rmd.com",
    "doctorName":"Vasu",
    "speciality":"Nurology",
    "PaitentClinicalHistory":"Alergic to antibiotics",
    "treatmentsProcedures":"Out patiant",
    "diagnosisProvisional":"Fever",
    "Notes":"",
    "treatment":"Home care",
    "investigation":"Blood test",
    "reviewAdvise":"visit every day",
    "Amount":"200",
    "consent":""
  },{
    "PatientID":"0425",
    "PatientName":"Paramesh",
    "Age":"10/05/2005",
    "contactNo":"9774447873",
    "IPNo":"0151",
    "bloodGroup":"O Positive",
    "address":"Plot No 6, Perungudi, chennai",
    "emailAddress":"pomu@rmd.com",
    "doctorName":"Boss",
    "speciality":"Urology",
    "PaitentClinicalHistory":"NA",
    "treatmentsProcedures":"Tablets",
    "diagnosisProvisional":"Maleria",
    "Notes":"Take rest",
    "treatment":"Tablets",
    "investigation":"Blood Test",
    "reviewAdvise":"Take tablets for a week",
    "Amount":"400",
    "consent":""
  },{
    "PatientID":"0425",
    "PatientName":"Saravanan",
    "Age":"10/05/2005",
    "contactNo":"9774447923",
    "IPNo":"0151",
    "bloodGroup":"O Positive",
    "address":"Plot No 6, Perungudi, chennai",
    "emailAddress":"pomu@rmd.com",
    "doctorName":"Boss",
    "speciality":"Urology",
    "PaitentClinicalHistory":"taking tablets",
    "treatmentsProcedures":"Injection",
    "diagnosisProvisional":"Kidny stone",
    "Notes":"",
    "treatment":"Pain killers",
    "investigation":"Urine test",
    "reviewAdvise":"Drink water",
    "Amount":"1000",
    "consent":""
  },{
    "PatientID":"0426",
    "PatientName":"Sathish",
    "Age":"10/05/2001",
    "contactNo":"9774447523",
    "IPNo":"0152",
    "bloodGroup":"O Negative",
    "address":"Plot No 72, Taramani, chennai",
    "emailAddress":"sath32@rmd.com",
    "doctorName":"Nemar",
    "speciality":"Neurology",
    "PaitentClinicalHistory":"Taking medicine",
    "treatmentsProcedures":"Drops",
    "diagnosisProvisional":"Internal Nerve dislocation",
    "Notes":"",
    "treatment":"Tablets and syrup",
    "investigation":"Nerve test",
    "reviewAdvise":"Take fibre rich food",
    "Amount":"2000",
    "consent":""
  },{
    "PatientID":"0427",
    "PatientName":"Sidhu",
    "Age":"08/03/1995",
    "contactNo":"9734467823",
    "IPNo":"0153",
    "bloodGroup":"B Negative",
    "address":"Plot No 6, Velachery, chennai",
    "emailAddress":"sid43@rmd.com",
    "doctorName":"Arbind",
    "speciality":"Cardiology",
    "PaitentClinicalHistory":"NA",
    "treatmentsProcedures":"Tableys",
    "diagnosisProvisional":"Cerebral damage",
    "Notes":"",
    "treatment":"Operation and tablets",
    "investigation":"Cerebral Test",
    "reviewAdvise":"Take Spinach rich foods",
    "Amount":"1500",
    "consent":""
  }]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  showPatientList(){
    return this.patient
  }

  viewPatient(){
    this.router.navigate(['/view']);
  }

  ngOnInit(){
    this.showPatientList();
  }

}
