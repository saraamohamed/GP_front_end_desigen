import {Component,OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { GeneralInfo } from 'src/app/shared/arb-project.model';

@Component({
  selector: 'app-tabset-selectbyid',
  templateUrl: './tabset-selectbyid.html'
})
export class NgbdTabsetSelectbyid  implements OnInit{
  constructor(public service:ArbProjectService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  OnSubmit(form:NgForm){
    this.service.PostGeneralInfo().subscribe(
      res=>{
        this.resetForm(form);
      },
      err=>{
        console.log(err);
      }
  )
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.GeneralInfo = new GeneralInfo();
  }
}