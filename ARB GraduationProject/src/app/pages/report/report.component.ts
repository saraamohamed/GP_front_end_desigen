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
  hey:ExamData = new ExamData();
  
  ngOnInit() {
    console.log(this.hey)
    let examDataId = 2;
    this.service.getOne(examDataId,'examdata').subscribe(res=>{this.hey = res as ExamData ;
      console.log(res);
    })
    // console.log(this.hey.name);
    
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