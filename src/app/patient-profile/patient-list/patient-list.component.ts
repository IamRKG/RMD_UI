import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientAddService} from "../patientServices/patient-add.service";


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientAddService:PatientAddService
  ) {}

  showPatientList(){
    return this.patientAddService.getPatient();
  }

  viewPatient(){
    this.router.navigate(['/view']);
  }
  addPatient(){
    this.router.navigate(['/add']);
  }

  ngOnInit(){
    this.showPatientList();
  }

}
