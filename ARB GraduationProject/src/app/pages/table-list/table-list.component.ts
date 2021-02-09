import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import { ExamData } from 'src/app/shared/arb-project.model';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor(private service:ArbProjectService) { }
  list:ExamData[]
  ngOnInit() {
    this.service.get();
  }

}
