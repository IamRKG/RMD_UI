import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patient = [{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  },{
    "PatientID":"0422",
    "PatientName":"ABCD",
    "Age":"12/12/1980",
    "contactNo":"9584715311"
    "IPNo":"",
    "bloodGroup":"",
    "address":"",
    "emailAddress":"",
    "doctorName":"",
    "speciality":"",
    "PaitentClinicalHistory":"",
    "treatmentsProcedures":"",
    "diagnosisProvisional":"",
    "Notes":"",
    "treatment":"",
    "investigation":"",
    "reviewAdvise":"",
    "Amount":"",
    "consent":""
  }]

  constructor(){

  }

  showPatientList(){
    return this.patient
  }

  ngOnInit(){
    console.log(this.showPatientList())
  }

}
