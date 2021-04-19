import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

import { Router } from '@angular/router';
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
  public redirectUrl: string = 'dash/table-list';
  constructor(public service:ArbProjectService,private http:HttpClient,private router: Router) {}

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
            console.log(res['id']);
            this.service.Doctor = res as Doctor
            this.service.DoctorId = res['id'];
            this.router.navigate([this.redirectUrl]);
            this.redirectUrl = null;
            // get request to get all ExamData of doctor of Id
            }
        }      
      },
      err=>{
        console.log("Not found send error msg");
      })
    };

  }