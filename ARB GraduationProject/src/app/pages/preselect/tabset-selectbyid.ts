import {Component,OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ClinicalInfo, GeneralInfo ,FinalAssessment,Patient} from 'src/app/shared/arb-project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabset-selectbyid',
  templateUrl: './tabset-selectbyid.html',
  styleUrls: ['./tabset-selectbyid.css']
})
export class NgbdTabsetSelectbyid  implements OnInit{
 

  constructor(public service:ArbProjectService,private http:HttpClient,  private router:Router) {}
  onClick(route,id:number){
    this.router.navigate([route])
  }

  ClinicalInfo:ClinicalInfo = new ClinicalInfo();
  GeneralInfo:GeneralInfo= new GeneralInfo();
  Patient:Patient = new Patient();
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
    this.service.Patient.examDataId = this.service.examDataId;
    this.service.Patient.clinicalInfo.featureId = this.service.PatientId;

    // this.InsertFeatures(form,data);
    console.log(this.service.Patient.generalInfo,this.service.Patient.clinicalInfo,this.service.Patient.finalAssessment);
    if ((this.service.Patient.generalInfo.id == 0) && (this.service.Patient.clinicalInfo.id == 0) && (this.service.Patient.finalAssessment.id == 0)){

        this.InsertFeatures(form,data);


    }
    else {
        this.UpdateFeatures(form,data);
        console.log("B3DEL FEEH NOW");
    }

  }

  passingPatienId(id:number)
  {
    this.service.PatientId = id;
    console.log("YARAAAB",this.service.examDataId)
  }
  InsertFeatures(form:NgForm,data:string){
    this.service.Post(data).subscribe(
      res=>{
        this.service.PatientId = res['id'];
        this.service.Patient = res as Patient;
        console.log(res);
        console.log("ANAA 3MLT INSERT")
        // this.resetForm(form,data);
      },
      err=>{
        console.log(err);
      })
  }
  UpdateFeatures(form:NgForm,data:string){
    this.service.Put(data).subscribe(
      res=>{
        this.resetForm(form,data);
        console.log("Put Req",res);
        this.service.Patient = res as Patient; 
        // this.refreshList();
      },
      err=>{
        console.log(err);
      }
  );
  }
  resetForm(form: NgForm,data:string) {
    form.form.reset();
    this.service.GeneralInfo = new GeneralInfo();
    this.service.FinalAssessment = new FinalAssessment();
    this.service.ClinicalInfo = new ClinicalInfo();

  }

}