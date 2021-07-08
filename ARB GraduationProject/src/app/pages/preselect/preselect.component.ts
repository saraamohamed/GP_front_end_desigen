import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ClinicalInfo, FinalAssessment, GeneralInfo } from 'src/app/shared/arb-project.model';
// import { event } from 'jquery';

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
  url: string;
  url1: string;
  
  onCreateProduct() {
    this.createProduct = true;
    this.message = '';
  }

  onProductSubmit(data) {
    this.createProduct = false;
    this.message = data.message;
    console.log(this.message)
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
  constructor(public service:ArbProjectService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  urls = new Array<string>();

  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
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
