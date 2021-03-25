import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';


import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { Doctor, Login} from 'src/app/shared/arb-project.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(public service:ArbProjectService,private http:HttpClient) {}

  Doctor:Doctor = new Doctor();
  Login:Login = new Login();

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.service.PostLogin().subscribe(
      res=>{
        console.log(res);
        switch(res){
          case "wrong password":
            return("WRONG PASS NOTIFICATION");
          case "Not Found":
            return("Not Found")
          default:
            {
            let doctorId = res['id'];
           console.log("redirect to tablelist with patient of the Doctor");

            }
        }      
      },
      err=>{
        console.log("Not found send error msg");
      })
    };
  // OnSubmit(form:NgForm,data:string){
   
  //   console.log(this.Doctor)
  //   this.service.getOne(this.Doctor.email,data).subscribe(
  //     res=> {let doctor =res[0]
  //       console.log(doctor.id)
  //         console.log(doctor.password);
  //         console.log(this.Doctor.password);
  //         if (doctor.password == this.Doctor.password){
  //           this.service.DoctorId = doctor.id
  //           console.log(this.service.DoctorId)
  //         }
  //         else{
  //           console.log("reload the same page with error msg")
  //         }
  //       },
  //       err=>{
  //         console.log(err);
      
  //     })
  //   }  
  }