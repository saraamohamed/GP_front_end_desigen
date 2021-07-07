import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// import domtoimage from 'dom-to-image';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { ExamData, ClinicalInfo, GeneralInfo, FinalAssessment, Patient, massSpecifications } from 'src/app/shared/arb-project.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare const google: any;
// import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  constructor(public service: ArbProjectService, private http: HttpClient, private router: Router) { }
  massSpecifications: massSpecifications[] = this.service.Patient.clinicalInfo.massSpecifications;

  examData: ExamData = new ExamData();
  patient: Patient = new Patient();
  lenght: number = 0;
  ngOnInit() {

    console.log(this.massSpecifications.length)

    this.service.getOne(this.service.examDataId, 'examData').subscribe(res => {
      this.service.ExamData = res as ExamData;
      console.log(this.service.ExamData, this.service.Patient);
    });


  }

  // generatePDF() {
  //   // var data = document.getElementById('contentToConvert') as HTMLCanvasElement;
  //   // console.log(data)
  //   var data = document.getElementById("contentToConvert") as HTMLCanvasElement;
  //   console.log(data)
  //   html2canvas(data).then(canvas=>{
  //   var ctx = canvas.getContext("2d");
  //   let image = new Image();
  //   image.onload = () => {
  //     ctx.drawImage(
  //       image,
  //       0, //sx
  //       0, //sy
  //       208, //sw
  //       300, //sh
  //       0, //dx
  //       0, //dy
  //       canvas.width, //dw
  //       canvas.height //dh
  //     );
  //   };
  //   image.src = canvas.toDataURL();
  //   let pdf = new jspdf('p', 'mm', "a4");
  //   // var position = 0;
  //   pdf.addImage(image.src, 'PNG',0,0,208,300)
  //   var blob = pdf.output("blob");
  //   window.open(URL.createObjectURL(blob));
  //   });

  //   // html2canvas(data).then(canvas => {
  //   //   console.log(canvas.height)
  //   //   console.log(canvas.width)
  //   //   canvas.height = 900;
  //   //   canvas.width = 750;
  //   //   var imgWidth = 200;
  //   //   var imgHeight = canvas.height * 180 / canvas.width;
  //   //   // var imgHeight = 600;
  //   //   console.log(imgHeight)
  //   //   const contentDataURL = canvas.toDataURL('image/png')
  //   //   console.log(contentDataURL)
  //   //   let pdf = new jspdf('p', 'mm', [imgWidth,imgHeight]);
  //   //   // var position = 0;
  //   //   pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight)
  //   //   var blob = pdf.output("blob");
  //   //   window.open(URL.createObjectURL(blob));
  //   // });
  //   }

  generatePDF() {
    const exportedContent = document.getElementById('contentToConvert');
    html2canvas(exportedContent,{ scrollY: -window.scrollY , scrollX: window.scrollX-10}
      ).then(canvas => {
      console.log(canvas.height)
      console.log(canvas.width)
      const fileWidth = 203;
      const fileHeight = canvas.height * fileWidth / canvas.width;
      console.log(fileHeight) 
      const fileURI = canvas.toDataURL()
      const PDF = new jspdf('p', 'mm', [225,505]);
      const position = 0;
      PDF.addImage(fileURI, 'PNG', 5, 5, fileWidth, 500)
      // PDF.save("test.pdf");
      var blob = PDF.output("blob");
      window.open(URL.createObjectURL(blob));
    });
  }

}

  // generatePDF(){
  //   const pdfBlock = document.getElementById("contentToConvert");

  //   const options = { 
  //     background: "white", 
  //     height: 600, 
  //     width: pdfBlock.clientHeight 
  //   };

  //   domtoimage.toPng(pdfBlock, options).then((fileUrl) => {
  //     var doc = new jspdf("p","mm","a4");
  //     doc.addImage(fileUrl, 'PNG', 12, 12, 240, 180);

  //     let docRes = doc.output();
  //     let buffer = new ArrayBuffer(docRes.length);
  //     let array = new Uint8Array(buffer);
  //     for (var i = 0; i < docRes.length; i++) {
  //         array[i] = docRes.charCodeAt(i);
  //     }
  //     const directory = this.file.dataDirectory;
  //     const fileName = "OptemeterReport.pdf";

  //     let options: IWriteOptions = { 
  //       replace: true 
  //     };

  //     this.file.checkFile(directory, fileName).then((res)=> {
  //       this.file.writeFile(directory, fileName,buffer, options)
  //       .then((res)=> {
  //         console.log("File generated" + JSON.stringify(res));
  //         this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           .then(() => console.log('File is exported'))
  //           .catch(e => console.log(e));
  //       }).catch((error)=> {
  //         console.log(JSON.stringify(error));
  //       });
  //     }).catch((error)=> {
  //       this.file.writeFile(directory,fileName,buffer).then((res)=> {
  //         console.log("File generated" + JSON.stringify(res));
  //         this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           .then(() => console.log('File exported'))
  //           .catch(e => console.log(e));
  //       })
  //       .catch((error)=> {
  //         console.log(JSON.stringify(error));
  //       });
  //     });
  //   }).catch(function (error) {
  //     console.error(error);
  //   }).finally(()=>{
  //        loading.dismiss();
  //  });
  // }  


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
// }

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