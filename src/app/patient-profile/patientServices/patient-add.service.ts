import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientAddService {

  constructor() { }

  getPatient(addPatient){
    return addPatient;
  }
}
