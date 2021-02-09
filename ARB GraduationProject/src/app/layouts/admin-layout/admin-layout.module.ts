import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { PatientComponent } from '../../pages/patient/patient.component';
import { PreselectComponent } from '../../pages/preselect/preselect.component';
import { ReportComponent } from '../../pages/report/report.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{NgbdTabsetSelectbyid} from '../../pages/preselect/tabset-selectbyid'


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    PatientComponent,
    UserProfileComponent,
    TableListComponent,
    PreselectComponent,
    ReportComponent,
    NgbdTabsetSelectbyid

  ]
})

export class AdminLayoutModule {}
