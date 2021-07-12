import {Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { ClinicalInfo,massSpecifications,Patient} from 'src/app/shared/arb-project.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.css']
})
export class MassComponent {

constructor(public service:ArbProjectService,private http:HttpClient) {}
MassMargin=[]
MassDensities=[]
Quadrants=[]
ClockFaces=[]
tabs=[]
selected = new FormControl(0);
ngOnInit():void{

      this.service.getCombo('GetMassMargin')
      .subscribe(res => this.MassMargin = res as []);
      this.service.getCombo('GetMassDensities')
      .subscribe(res =>  this.MassDensities = res as []);
      this.service.getCombo('GetQuadrants')
      .subscribe(res =>  this.Quadrants = res as []);
      this.service.getCombo('GetClockFaces')
      .subscribe(res =>  this.ClockFaces = res as []);
  }

  addTab() {
    console.log("tabs");
    console.log("index",this.service.index);

    this.service.Patient.clinicalInfo.massSpecifications[this.service.index] = new massSpecifications();
    this.service.Patient.clinicalInfo.massSpecifications[this.service.index].clinicalInfoId = this.service.Patient.id;
    this.service.tabs.push('Mass' + (this.service.index+1));
    this.service.index+=1;
    console.log("Tabs:",this.service.index);

  }

  removeTab() {

    this.service.index = this.service.index - 1;
    this.service.Patient.clinicalInfo.massSpecifications.pop();
    this.service.tabs.pop();

  }
}

