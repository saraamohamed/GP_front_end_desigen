import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ExamData, Patient , Doctor , GeneralInfo ,ClinicalInfo ,FinalAssessmeny} from './arb-project.model';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArbProjectService {

  constructor(private http:HttpClient) { }

  readonly  examDataUrl = 'http://localhost:57645/api/ExamData';
  ExamData:ExamData = new ExamData();
  list:ExamData[];
  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'applicaion/json',
      'Access-Control-Allow-Origin':'*'
    })
  };
  
  PostExamData(){
    return (this.http.post(this.examDataUrl,this.ExamData));
  }
  deleteExamData(id:number){
    return (this.http.delete(`${this.examDataUrl}/${id}` ));
  } 
  getExamData(){
    this.http.get(this.examDataUrl).toPromise().then(
      res => {this.list = res as ExamData[]});
  }
  putExamData(){
    return (this.http.put(`${this.examDataUrl}/${this.ExamData.id}`,this.ExamData));
  }






  // refreshList() {
  //   this.http.get(this.baseUrl)
  //     .toPromise()
  //     .then(res =>this.list = res as test[]);
  // }

}
