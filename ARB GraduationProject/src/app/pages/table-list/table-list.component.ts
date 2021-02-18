import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {PatientComponent} from 'src/app/pages/patient/patient.component'
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ExamData,ClinicalInfo,GeneralInfo,FinalAssessment } from 'src/app/shared/arb-project.model';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor(private service:ArbProjectService  ,private http:HttpClient) { }
  ExamData:ExamData = new ExamData();
  list:ExamData[]
  ngOnInit() {
    this.service.getExamData();
  }
  preselect(id:number){
    console.log(id);
  }
  patientForm(selectedRecord:ExamData){
    this.service.ExamData = selectedRecord;
  }
  DeleteOn(id:number){
    if (confirm('Are You Sure You Want To Delete?'))
    {
      //       this.service.Delete('ExamData',id)

      this.service.Delete('ExamData',id)
      .subscribe(
      res =>{
        this.refreshList();
        
      },
      err =>{console.log(err)}
    )
    }
  }

  refreshList() {
    this.service.getExamData();
  }
}
