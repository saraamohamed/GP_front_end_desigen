import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { ExamData,ClinicalInfo,GeneralInfo,FinalAssessment } from 'src/app/shared/arb-project.model';
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
  ExamData:ExamData = new ExamData();
  ngOnInit() {
    let doctorId = this.service.DoctorId;
    this.service.getOne(doctorId,'examData/ExamDataOfDoctor').subscribe(res=>{this.service.list = res as ExamData[]})
    if (this.service.DoctorId !=0)
    {
      console.log(this.service.DoctorId)
    }
  }


  generatePDF() {
    console.log("kher")
    var data = document.getElementById('contentToConvert') as HTMLCanvasElement;
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      var blob = pdf.output("blob");
      window.open(URL.createObjectURL(blob));
    });
    }
}

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