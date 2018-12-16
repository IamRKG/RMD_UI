import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PatientAddService} from "../patientServices/patient-add.service";

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  constructor(   private  patientAddService:PatientAddService,
  ) { }

  searchForm = new FormGroup({
    searchValue:new FormControl('')
  })

  search(){
    let searchResult = this.searchForm.value
    let patients = this.patientAddService.patients.filter(function(searchResult) {
      return searchResult.patientID == "0423";

    });
    console.log(patients)

  }
  ngOnInit() {

  }

}
