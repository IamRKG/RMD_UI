import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PatientAddService} from "../patientServices/patient-add.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  patientsReset = [{
    "patientID":"0422",
    "patientName":"Ramu",
    "age":"12/12/1980",
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
    "amount":"2000",
    "consent":"NA"
  },{
    "patientID":"0423",
    "patientName":"Somu",
    "age":"10/05/1995",
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
    "amount":"100",
    "consent":"NA"
  },{
    "patientID":"0424",
    "patientName":"Kumar",
    "age":"10/05/1975",
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
    "amount":"200",
    "consent":""
  },{
    "patientID":"0425",
    "patientName":"Paramesh",
    "age":"10/05/2005",
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
    "amount":"400",
    "consent":""
  },{
    "patientID":"0425",
    "patientName":"Saravanan",
    "age":"10/05/2005",
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
    "notes":"",
    "treatment":"Pain killers",
    "investigation":"Urine test",
    "reviewAdvise":"Drink water",
    "amount":"1000",
    "consent":""
  },{
    "patientID":"0426",
    "patientName":"Sathish",
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
    "patientID":"0427",
    "patientName":"Sidhu",
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
    private  patientAddService:PatientAddService,
  ) { }

  searchForm = new FormGroup({
    searchValue:new FormControl('')
  })


  search(){
    let searchInput = this.searchForm.value
    let patients = this.patientAddService.patients.filter(function(searchResult) {
      return searchResult.patientID === searchInput.searchValue;

    });

    if(searchInput.searchValue !== ""){
      this.patientAddService.patients = patients
      this.patientAddService.patients;
    }else{
      this.patientAddService.patients = this.patientsReset;
    }

    this.router.navigate(['/patientList']);

  }
  ngOnInit() {

  }

}
