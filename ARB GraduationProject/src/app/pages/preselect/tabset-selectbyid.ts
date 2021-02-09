import {Component,OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ClinicalInfo, GeneralInfo } from 'src/app/shared/arb-project.model';

@Component({
  selector: 'app-tabset-selectbyid',
  templateUrl: './tabset-selectbyid.html'
})
export class NgbdTabsetSelectbyid  implements OnInit{
  constructor(public service:ArbProjectService,private http:HttpClient) { }
  ClinicalInfo:ClinicalInfo = new ClinicalInfo();

  BiRadslist=[]
  RecommendationList=[]
  ngOnInit(): void {
    this.service.getBiRadsCombo()
    .subscribe(res => this.BiRadslist = res as []);
    this.service.getRecommendationCombo()
    .subscribe(res => this.RecommendationList = res as []);
  }

  OnSubmit(form:NgForm,data:string){
    console.log(data)
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
    if (data='GeneralInfo'){
      this.service.GeneralInfo = new GeneralInfo();
    }
  }
 
}