import {Component,OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ClinicalInfo, GeneralInfo ,FinalAssessment, features} from 'src/app/shared/arb-project.model';

@Component({
  selector: 'app-tabset-selectbyid',
  templateUrl: './tabset-selectbyid.html',
  styleUrls: ['./tabset-selectbyid.css']
})
export class NgbdTabsetSelectbyid  implements OnInit{

  constructor(public service:ArbProjectService,private http:HttpClient) { }

  ClinicalInfo:ClinicalInfo = new ClinicalInfo();
  GeneralInfo:GeneralInfo= new GeneralInfo();
  general : GeneralInfo[]
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

    if(this.service.Patient.GeneralInfo.id !== 0){
      this.service.getOne(this.service.PatientId,'GeneralInfo').subscribe(res => this.service.Patient.GeneralInfo = res as GeneralInfo);
      this.service.getOne(this.service.PatientId,'FinalAssessment').subscribe(res => this.service.Patient.FinalAssessment = res as FinalAssessment);
      this.service.getOne(this.service.PatientId,'ClinicalInfo').subscribe(res => this.service.Patient.ClinicalInfo = res as ClinicalInfo); 
    }
    this.service.getCombo('GetBiRads')
    .subscribe(res => this.BiRadslist = res as []);
    this.service.getCombo('GetRecommendation')
    .subscribe(res => this.RecommendationList = res as []);
    this.service.getCombo('GetMassMargin')
    .subscribe(res => this.MassMargin = res as []);
    this.service.getCombo('GetMassDensities')
    .subscribe(res =>  this.MassDensities = res as []);
    this.service.getCombo('GetAsymmetries')
    .subscribe(res =>  this.Asymmetries = res as []);
    this.service.getCombo('GetQuadrants')
    .subscribe(res =>  this.Quadrants = res as []);
    this.service.getCombo('GetClockFaces')
    .subscribe(res =>  this.ClockFaces = res as []);
    this.service.getCombo('GetClacificationTypicallyBenign')
    .subscribe(res =>  this.ClacificationTypicallyBenign = res as []);
    this.service.getCombo('GetClacificationSuspiciousMorphology')
    .subscribe(res =>  this.ClacificationSuspiciousMorphology = res as []);
    this.service.getCombo('GetClacificationDistribution')
    .subscribe(res =>  this.ClacificationDistribution = res as []);
  }

  OnSubmit(form:NgForm,data:string){
    this.service.Patient.doctorId = this.service.DoctorId;
    this.service.Patient.examDataId = this.service.PatientId;
    if ((this.service.Patient.GeneralInfo.id == 0) && (this.service.Patient.ClinicalInfo.id == 0) 
                                                   && (this.service.Patient.FinalAssessment.id == 0)){
      this.InsertFeatures(form,data);
    }
    else {
      this.UpdateFeatures(form,data);
    }
  }
  InsertFeatures(form:NgForm,data:string){
    this.service.Post(data).subscribe(
      res=>{
        this.resetForm(form,data);
      },
      err=>{
        console.log(err);
      })
  }
  UpdateFeatures(form:NgForm,data:string){
    this.service.Put(data).subscribe(
      res=>{
        this.resetForm(form,data);
        // this.refreshList();
      },
      err=>{
        console.log(err);
      }
  );
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
