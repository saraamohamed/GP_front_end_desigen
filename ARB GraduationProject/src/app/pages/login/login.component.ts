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
  Doctor:Doctor=new Doctor();

  ngOnInit() {
  }
  OnSubmit(form:NgForm,data:string){
   
    this.service.getOne(this.service.Doctor.email,data).subscribe(
      res=>{
        let Doctor = res[0];
        console.log(Doctor.password);
        console.log(this.service.Doctor.password);
        if (Doctor.password == this.service.Doctor.password){
          console.log("redirct to home with Doctor Id ");
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
