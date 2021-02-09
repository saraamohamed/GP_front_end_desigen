import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ExamData, Patient , Doctor , GeneralInfo ,ClinicalInfo ,FinalAssessment} from './arb-project.model';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArbProjectService {

  constructor(private http:HttpClient) { }
  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'applicaion/json',
      'Access-Control-Allow-Origin':'*'
    })
  };
  readonly APIUrl = 'http://localhost:57645/api/';
  readonly ComboUrl = 'http://localhost:57645/api/combobox';
  readonly  examDataUrl = 'http://localhost:57645/api/ExamData';
  readonly  generalInfoUrl = 'http://localhost:57645/api/generalinfo';
  
  ExamData:ExamData = new ExamData();
  GeneralInfo:GeneralInfo = new GeneralInfo();
  list:ExamData[];
  FinalAssessment:FinalAssessment = new FinalAssessment();
  ClinicalInfo:ClinicalInfo = new ClinicalInfo();
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
    }
  }

  Post(APIUrl){
    let variableName = this.whichVar(APIUrl);
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

  getBiRadsCombo(){
    return (this.http.get(`${this.ComboUrl}/getbirads`));
  }
  getRecommendationCombo(){
    return (this.http.get(`${this.ComboUrl}/getrecommendation`));
  }

  getExamData(){
    this.http.get(this.examDataUrl).toPromise().then(
      res => {this.list = res as ExamData[]});
  }
  // // PostExamData(){
  // //   return (this.http.post(this.examDataUrl,this.ExamData));
  // // }
  // // deleteExamData(id:number){
  // //   return (this.http.delete(`${this.examDataUrl}/${id}` ));
  // // } 
  // // putExamData(){
  // //   return (this.http.put(`${this.examDataUrl}/${this.ExamData.id}`,this.ExamData));
  // // }
  // PostGeneralInfo(){
  //   return (this.http.post(this.generalInfoUrl,this.GeneralInfo));
  // }

  
  // refreshList() {
  //   this.http.get(this.baseUrl)
  //     .toPromise()
  //     .then(res =>this.list = res as test[]);
  // }

}
