import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
declare const google: any;
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, AfterViewInit {
  @ViewChild('viewer') viewerRef: ElementRef;
  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'
    }, this.viewerRef.nativeElement).then(instance => {
      instance.disableElements(['toolbarGroup-Shapes']);
      instance.disableElements(['toolbarGroup-Edit']);
      instance.disableElements(['toolbarGroup-Insert']);
      instance.disableElements(['toolbarGroup-Annotate']);

    });

  }

  constructor() { }

  ngOnInit() { }
}