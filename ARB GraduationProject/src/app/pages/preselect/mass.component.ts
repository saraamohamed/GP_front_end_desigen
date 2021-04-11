import {Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.css']
})
export class MassComponent {

  tabs = [];
  selected = new FormControl(0);

  
  addTab() {

    this.tabs.push('Mass' + (this.tabs.length+1));
  }

  removeTab() {

    this.tabs.splice((this.tabs.length-1), 1);

  }
constructor(public service:ArbProjectService,private http:HttpClient) {}

}

