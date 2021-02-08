import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ExamData, Patient , Doctor , GeneralInfo ,ClinicalInfo ,FinalAssessmeny} from './arb-project.model';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArbProjectService {

  constructor(private http:HttpClient) { }

  readonly  baseUrl = 'http://localhost:57645/api/test';
  httpOptions={
    headers: new HttpHeaders({
      'Content-type':'applicaion/json',
      'Access-Control-Allow-Origin':'*'
    })
  };






  refreshList() {
    this.http.get(this.baseUrl)
      .toPromise()
      .then(res =>this.list = res as test[]);
  }

}
