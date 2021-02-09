import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ExamData } from 'src/app/shared/arb-project.model';
import { PatientComponent } from 'src/app/pages/patient/patient.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor(private service:ArbProjectService ,private http:HttpClient) { }
  list:ExamData[]
  ngOnInit() {
    this.service.getExamData();
  }
  // populateForm(selectedRecord:ExamData){
    
  //   console.log(selectedRecord.id)
  //   this.patient.ExamData = selectedRecord ;
  // }
  DeleteOn(id:number){
    if (confirm('Are You Sure You Want To Delete?'))
    {
      this.service.deleteExamData(id)
      .subscribe(
      res =>{
        this.refreshList();
        
      },
      err =>{console.log(err)}
    )
    }
  }

  refreshList() {
    // this.http.get(this.service.examDataUrl)
    //   .toPromise()
    //   .then(res =>this.list = res as ExamData[]);
    this.service.getExamData();
  }
}
