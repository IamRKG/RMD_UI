import {FormGroup, FormControl} from '@angular/forms'

export class PatientFormControls {

  constructor(){}

  getPatientFormControls(){
    return new FormGroup({
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
  }

}
