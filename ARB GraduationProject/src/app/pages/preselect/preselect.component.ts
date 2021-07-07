import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import html2canvas from 'html2canvas';
import {HttpClient} from "@angular/common/http";
import { ClinicalInfo, FinalAssessment, GeneralInfo } from 'src/app/shared/arb-project.model';
import { event } from 'jquery';

@Component({
  selector: 'preselect-icons',
  templateUrl: './preselect.component.html',
  styleUrls: ['./preselect.component.scss']
})
export class PreselectComponent implements OnInit {
  tabs = ['General Information', 'Clinical Information', 'Final Assesment'];
  selected = new FormControl(0);
  tabtitle:string = '';
  createProduct: boolean;
  message: string;  
  ImageURL: string = null;
  fileToUpload: File | null = null;
  file: File =null ;
  THEfile: File =null ;
  fileToUploads =new Array<File>();
  sanitization: any;
  
  onCreateProduct() {
    this.createProduct = true;
    this.message = '';
  }

  onProductSubmit(data) {
    this.createProduct = false;
    this.message = data.message;
    console.log(this.message)
  }

  constructor(public service:ArbProjectService,private http:HttpClient,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.http.get('http://localhost:57645/api/image/'+2).subscribe(res=> {
      
      this.urls.push(res as string);
      // this.ImageURL = res as string;
      console.log(this.urls);
    });
  
  }
  
  

  urls = new Array<string>();
  files = new Array<File>();

  handleFileInput(event){
    this.urls = [];
    this.fileToUploads = event.target.files;
    console.log(this.fileToUploads)
    for(var file of this.fileToUploads){
      this.files.push(file);
    }
    
    if(this.fileToUploads){
      for (this.THEfile of this.fileToUploads){
        var reader = new FileReader();
        reader.onload = (event:any)=>{
          this.urls.push(event.target.result);
          // this.ImageURL = event.target.result;
        }
        reader.readAsDataURL(this.THEfile);
      }
    }
    
  }
  
    

  OnSubmitImage(Image){
    for (this.file of this.files){
      this.postFile(this.file).subscribe(data=>{console.log(data)});
    }
    // this.postFile(this.fileToUpload).subscribe(data=>{console.log(data)});
  }

  postFile( fileToUpload: File) {

    const endpoint = 'http://localhost:57645/api/UploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    console.log(fileToUpload.name);
    return this.http
      .post(endpoint, formData);
  }
  


  



  OnSubmit(form:NgForm,data:string){

    this.service.Post(data).subscribe(
      res=>{
        this.resetForm(form,data);
      },
      err=>{
        console.log(err);
      }
  )
  }
  resetForm(form: NgForm,data:string) {
    form.form.reset();
    this.service.GeneralInfo = new GeneralInfo();
    this.service.FinalAssessment = new FinalAssessment();
    this.service.ClinicalInfo = new ClinicalInfo();

  }

}





  // addTab(selectAfterAdding: boolean) {

  //   if(this.tabtitle != ''){
  //       this.tabs.push(this.tabtitle);
  //   }else{
  //       this.tabs.push('New');
  //   }

  //   this.tabtitle = '';

  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
  // }

  // removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }