import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { PatientComponent } from '../../patient/patient.component';
import { DoctorProfileComponent } from '../../doctor-profile/doctor-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { PreselectComponent } from '../../pre-select/pre-select.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { GalleryComponent } from 'app/gallery/gallery.component';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxGalleryModule
  ],
  declarations: [
    PatientComponent,
    DoctorProfileComponent,
    TableListComponent,
    PreselectComponent,
    IconsComponent,
    MapsComponent,
    UpgradeComponent,
    GalleryComponent,
  ]
})

export class AdminLayoutModule {}
