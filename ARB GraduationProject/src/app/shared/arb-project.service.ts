import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ExamData, Patient , Doctor , GeneralInfo ,ClinicalInfo ,FinalAssessment} from './arb-project.model';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArbProjectService {

  constructor(private http:HttpClient ) { }
  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'applicaion/json',
      'Access-Control-Allow-Origin':'*'
    })
  };
  readonly APIUrl = 'http://localhost:57645/api/';
  readonly ComboUrl = 'http://localhost:57645/api/combobox';
  readonly  examDataUrl = 'http://localhost:57645/api/ExamData';
  
  PatientId:number = 0;
  DoctorId:number = 0;
  ExamData:ExamData = new ExamData();
  GeneralInfo:GeneralInfo = new GeneralInfo();
  Doctor:Doctor = new Doctor();
  general:GeneralInfo[]
  list:ExamData[];
  FinalAssessment:FinalAssessment = new FinalAssessment();
  ClinicalInfo:ClinicalInfo = new ClinicalInfo();
  Patient:Patient = new Patient();

  whichVar(Name:string)
  {
    switch(Name){
      case 'FinalAssessment':
        return(this.FinalAssessment);
      case 'GeneralInfo':
        return(this.GeneralInfo);
      case 'ClinicalInfo':
        return(this.ClinicalInfo);
      case 'ExamData':
        return(this.ExamData);
      case 'Patient':
        return(this.Patient);
      case 'Doctor':
        return(this.Doctor);
    }
  }

  Post(APIUrl){
    let variableName = this.whichVar(APIUrl);
    console.log(variableName);
    return(this.http.post(`${this.APIUrl}/${APIUrl}`,variableName));

  }
  Put(APIUrl){
    let variableName = this.whichVar(APIUrl);
    return (this.http.put(`${this.APIUrl}/${APIUrl}/${variableName.id}`,variableName));
  }
  Delete(APIUrl,id)
  {
    return (this.http.delete(`${this.APIUrl}/${APIUrl}/${id}`)); 
  }

  getCombo(comboboxName:string){
    return (this.http.get(`${this.ComboUrl}/${comboboxName}`));
  }
  
  getOne(id,APIUrl){
    console.log(`${this.APIUrl}/${APIUrl}/?${id}`)
    return (this.http.get(`${this.APIUrl}/${APIUrl}/?${id}`));
  }
  
  getExamData(){
    this.http.get(this.examDataUrl).toPromise().then(
      res => {this.list = res as ExamData[]});
  }

  
  // refreshList() {
  //   this.http.get(this.baseUrl)
  //     .toPromise()
  //     .then(res =>this.list = res as test[]);
  // }

}
