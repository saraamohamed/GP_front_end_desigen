import { Component, OnInit } from '@angular/core';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public service:ArbProjectService) { }

  ngOnInit() {
   
  }
 
  OnSubmit(form:NgForm,data:string){
    this.service.Put(data).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err);
      }
  );
  }

}
