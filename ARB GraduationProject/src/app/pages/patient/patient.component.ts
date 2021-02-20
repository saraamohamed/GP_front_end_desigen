import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import{TableListComponent}from 'src/app/pages/table-list/table-list.component'
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
// import { extname } from 'path';
import { ExamData } from 'src/app/shared/arb-project.model';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {


  constructor(public service:ArbProjectService,private http:HttpClient) { }

  list:ExamData[];
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

 ExamData:ExamData = new ExamData();
 hey:ExamData = new ExamData
 
  ngOnInit() {

    if(this.service.ExamData.id !== 0){
      this.service.getOne(this.service.ExamData.id,'ExamData').subscribe(res =>this.service.ExamData = res as ExamData) 
    }
        
    // this.TableList.patientForm;
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
  
  OnSubmit(form:NgForm,data:string){
    console.log(this.service.ExamData.id);
    if(this.service.ExamData.id == 0)
        this.insertRecord(form,data);
    else
        this.updateRecord(form,data);    
}
// patientForm(selectedRecord:ExamData){
//   console.log(selectedRecord);
// }
//post('ExamData',ExamData)
insertRecord(form:NgForm,data:string){
  this.service.Post(data).subscribe(
    res=>{
      this.resetForm(form);
    },
    err=>{
      console.log(err);
    }
)
}
updateRecord(form:NgForm,data:string){
  this.service.Put(data).subscribe(
    res=>{
      this.resetForm(form);
      this.refreshList();
    },
    err=>{
      console.log(err);
    }
);
}

refreshList() {
  this.http.get(this.service.examDataUrl)
    .toPromise()
    .then(res =>this.list = res as ExamData[]);
}

resetForm(form: NgForm) {
  form.form.reset();
  this.service.ExamData = new ExamData();
}

}
