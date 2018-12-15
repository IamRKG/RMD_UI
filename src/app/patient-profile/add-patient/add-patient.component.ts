import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor() { }

  addProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  ngOnInit() {
  }

}
