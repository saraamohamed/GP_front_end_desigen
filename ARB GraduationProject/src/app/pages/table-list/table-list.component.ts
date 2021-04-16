import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {PatientComponent} from 'src/app/pages/patient/patient.component'
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ExamData,ClinicalInfo,GeneralInfo,FinalAssessment,Patient} from 'src/app/shared/arb-project.model';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  closeResult: string;
  redirectUrl: string = '/dash/preselect';

  constructor(private service:ArbProjectService  ,private http:HttpClient, private router:Router, private modalService: NgbModal) { }
  open(content,name:string) {
    console.log(name);
    this.pdfScr = `assets/${name}.pdf`;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = ` ${result}`;
    }, (reason) => {
      this.closeResult = ` ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return '';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return ` ${reason}`;
    }
  }
  
  onClick(route){
    this.service.ExamData = new ExamData();
    this.router.navigate([route])

  }
  ExamData:ExamData = new ExamData();
  list:ExamData[]
  pdfScr:string = '';
  ngOnInit() {
    let doctorId = this.service.DoctorId;
    this.service.getExamDataOfDoctor(doctorId,'examData/ExamDataOfDoctor').subscribe(res=>{this.service.list = res as ExamData[]})
    if (this.service.DoctorId !=0)
    {
      console.log(this.service.DoctorId)
    }
  }
  // PdfShow(name:string){
  //   console.log(name);
  //   this.pdfScr = `assets/${name}.pdf`;
    
  // }
  preselect(id:number){
    this.service.examDataId = id;
    this.service.getPatient(this.service.examDataId,'Patient','examId').subscribe(res =>{
      if (res != null && res != "Not Found"){
      this.service.Patient = res as Patient
      this.service.PatientId = res['id'];
      console.log(this.service.Patient);
      console.log("gebto");
      this.router.navigate([this.redirectUrl]);
      this.redirectUrl = null;
          }
       },err=>{
        this.service.Patient = new Patient();
        this.router.navigate([this.redirectUrl]);
        
       });
       
    
  }
  patientForm(id:number){
    this.service.ExamData.id = id;
    
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
