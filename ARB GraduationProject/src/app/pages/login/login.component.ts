import { Component, OnInit, OnDestroy } from '@angular/core';
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
       let doctorId = res['id'];
      //  salma: 
        console.log("redirect to tablelist with patient of the Doctor");
        // Get patients of the Doctor 
      },
      err=>{
        console.log("Not found send error msg");
      })
  }

 

}
