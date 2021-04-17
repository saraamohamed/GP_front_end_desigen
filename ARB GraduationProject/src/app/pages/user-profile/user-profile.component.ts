import { Component, OnInit } from '@angular/core';
import { ArbProjectService } from 'src/app/shared/arb-project.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public service:ArbProjectService) { }

  ngOnInit() {
  }

}
