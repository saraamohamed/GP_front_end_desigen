import {Component,OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ClinicalInfo, GeneralInfo ,FinalAssessment} from 'src/app/shared/arb-project.model';

@Component({
  selector: 'app-tabset-selectbyid',
  templateUrl: './tabset-selectbyid.html'
})
export class NgbdTabsetSelectbyid  implements OnInit{
  constructor(public service:ArbProjectService,private http:HttpClient) { }
  ClinicalInfo:ClinicalInfo = new ClinicalInfo();

  BiRadslist=[]
  RecommendationList=[]
  Asymmetries=[]
  MassMargin=[]
  MassDensities=[]
  Quadrants=[]
  ClockFaces=[]
  ClacificationTypicallyBenign=[]
  ClacificationSuspiciousMorphology=[]
  ClacificationDistribution=[]
  ngOnInit(): void {
    this.service.getBiRadsCombo()
    .subscribe(res => this.BiRadslist = res as []);

    this.service.getRecommendationCombo()
    .subscribe(res => this.RecommendationList = res as []);
    // ClinicalComboBoxs
    this.service.get('GetMassMargin')
    .subscribe(res => this.MassMargin = res as []);

    this.service.get('GetMassDensities')
    .subscribe(res =>  this.MassDensities = res as []);


    this.service.get('GetAsymmetries')
    .subscribe(res =>  this.Asymmetries = res as []);

    this.service.get('GetQuadrants')
    .subscribe(res =>  this.Quadrants = res as []);

    this.service.get('GetClockFaces')
    .subscribe(res =>  this.ClockFaces = res as []);


    this.service.get('GetClacificationTypicallyBenign')
    .subscribe(res =>  this.ClacificationTypicallyBenign = res as []);

    this.service.get('GetClacificationSuspiciousMorphology')
    .subscribe(res =>  this.ClacificationSuspiciousMorphology = res as []);

    this.service.get('GetClacificationDistribution')
    .subscribe(res =>  this.ClacificationDistribution = res as []);

  }

  OnSubmit(form:NgForm,data:string){
    console.log(data);
    console.log(form);
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
    // if (data='GeneralInfo'){
    //   this.service.GeneralInfo = new GeneralInfo();
    // }
    // if (data='FianlAssessment'){
    //   this.service.FinalAssessment = new FinalAssessment();
    // }
    // if (data='ClinicalInfo'){
    //   this.service.ClinicalInfo = new ClinicalInfo();
    // }
    this.service.GeneralInfo = new GeneralInfo();
    this.service.FinalAssessment = new FinalAssessment();
    this.service.ClinicalInfo = new ClinicalInfo();
    
  }
 
}