import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { Doctor} from 'src/app/shared/arb-project.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public service:ArbProjectService,private http:HttpClient) {}
  Doctor = new Doctor();

  ngOnInit() {
  }

  OnSubmit(form:NgForm,data:string){
   
    console.log(this.Doctor)
    this.service.getOne(this.Doctor.email,data).subscribe(
      res=> {let doctor =res[0]
        console.log(doctor.id)
          console.log(doctor.password);
          console.log(this.Doctor.password);
          if (doctor.password == this.Doctor.password){
            this.service.DoctorId = doctor.id
            console.log(this.service.DoctorId)
          }
          else{
            console.log("reload the same page with error msg")
          }
        },
        err=>{
          console.log(err);
      
      })
    }

        
     
  }