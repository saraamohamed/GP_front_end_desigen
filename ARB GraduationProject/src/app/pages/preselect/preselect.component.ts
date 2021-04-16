import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ClinicalInfo, FinalAssessment, GeneralInfo } from 'src/app/shared/arb-project.model';

@Component({
  selector: 'preselect-icons',
  templateUrl: './preselect.component.html',
  styleUrls: ['./preselect.component.scss']
})
export class PreselectComponent implements OnInit {
  tabs = ['General Information', 'Clinical Information', 'Final Assesment'];
  selected = new FormControl(0);
  tabtitle:string = '';

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
