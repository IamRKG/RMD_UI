import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {PatientAddService} from "../patientServices/patient-add.service";
import {PatientFormControls} from "../form-Controls/PatientFormControls"

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  @Output() addToList = new EventEmitter();
  constructor(
    private  patientAddService:PatientAddService,
  ) { }

  patientFormControls = new PatientFormControls;
  addProfileForm = this.patientFormControls.getPatientFormControls();


  addPatient(){
    this.patientAddService.addPatient(this.addProfileForm.value).subscribe(successMsg => console.log(successMsg));
  }

  ngOnInit() {
  }

}
