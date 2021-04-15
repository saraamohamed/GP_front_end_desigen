import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { ExamData,ClinicalInfo,GeneralInfo,FinalAssessment,Patient } from 'src/app/shared/arb-project.model';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
declare const google: any;
// import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit{
  constructor(private service:ArbProjectService  ,private http:HttpClient, private router:Router) { }
  examData:ExamData = new ExamData();
  patient:Patient = new Patient();
  examDataId:number = 0; 
  ngOnInit() { 
   
    // // console.log(this.service.PatientId) ;
<<<<<<< HEAD
    // this.service.getPatient(this.service.PatientId,'patient').subscribe(res=>{this.patient = res as Patient ;
=======
    // this.service.getOne(this.service.PatientId,'patient').subscribe(res=>{this.patient = res as Patient ;
>>>>>>> 9f3b7bbc2927e62f7c17befb63142d7d099f0f89
    //   console.log(res);
    //   // this.examDataId = this.patient.examDataId
    //   // console.log(this.examDataId);
    // })
    // // // let examDataId = this.patient.examDataId;
    // // console.log(this.patient.examDataId)
    // // console.log(this.examDataId)
    // this.service.getOne(this.service.examDataId,'examData').subscribe(res=>{this.examData = res as ExamData ;
    //   console.log(res);
    this.service.getOne(this.service.examDataId,'examData').subscribe(res=>{this.service.ExamData = res as ExamData ;
      console.log(this.service.ExamData,this.service.Patient);
    });
    
    
  }


  generatePDF() {
    console.log("kher")
    var data = document.getElementById('contentToConvert') as HTMLCanvasElement;
    html2canvas(data).then(canvas => {
      console.log(canvas.height)
      console.log(canvas.width)
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      // var imgHeight = 500
      // console.log()
      console.log(imgWidth)
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = -70;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      var blob = pdf.output("blob");
      window.open(URL.createObjectURL(blob));
    });
    }
}
// <pdf-viewer  [src] = "pdfScr" [render-text] = "true" [show-all]= "true" style="display: block;"></pdf-viewer>

// @ViewChild('viewer') viewerRef: ElementRef;
//   ngAfterViewInit(): void {
    // WebViewer({
    //   path: '../assets/lib',
    //   initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
    // }, this.viewerRef.nativeElement).then(instance => {
    //   instance.disableElements(['toolbarGroup-Shapes']);
    //   instance.disableElements(['toolbarGroup-Edit']);
    //   instance.disableElements(['toolbarGroup-Insert']);
    //   instance.disableElements(['toolbarGroup-Annotate']);

    // });

  // }