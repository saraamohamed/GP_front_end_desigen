import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { ExamData,ClinicalInfo,GeneralInfo,FinalAssessment,Patient ,massSpecifications} from 'src/app/shared/arb-project.model';
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
  constructor(public service:ArbProjectService  ,private http:HttpClient, private router:Router) { }
  massSpecifications :massSpecifications[] = this.service.Patient.clinicalInfo.massSpecifications;
  
  examData:ExamData = new ExamData();
  patient:Patient = new Patient();
  lenght:number = 0; 
  ngOnInit() { 
   
    console.log(this.massSpecifications.length)
  
    this.service.getOne(this.service.examDataId,'examData').subscribe(res=>{this.service.ExamData = res as ExamData ;
      console.log(this.service.ExamData,this.service.Patient);
    });
    
    
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
  // generatePDF() {
    
  //   var data = document.getElementById('Please') as HTMLCanvasElement;
  //   console.log(data)
  //   html2canvas(data).then(canvas => {
  //     var imgWidth = 208;   
  //     var pageHeight = 1080;    
  //     var imgHeight = canvas.height * imgWidth / canvas.width;  
  //     var heightLeft = imgHeight;  
  //     console.log(imgWidth)
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jspdf('p', 'mm', 'a4', true);
  //     var position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight+ 25);
  //     heightLeft -= pageHeight;

  //     while (heightLeft >= 0) {
  //     position = heightLeft - imgHeight;
  //     pdf.addPage();
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight+ 25);
  //     heightLeft -= pageHeight;
  //     }
  //     var blob = pdf.output("blob");
  //     window.open(URL.createObjectURL(blob));
  //   });
  //   }
}

// pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight ,undefined,'FAST')




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