import { Routes } from '@angular/router';
import {AdminLayoutComponent} from '../../layouts/admin-layout/admin-layout.component';
import { LoginComponent } from '../../pages/login/login.component';
import { PatientComponent } from '../../pages/patient/patient.component';
import { PreselectComponent } from '../../pages/preselect/preselect.component';
import { ReportComponent } from '../../pages/report/report.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TableListComponent } from '../../pages/table-list/table-list.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path:'',
                redirectTo: 'table-list'
            },
            {
                path:'patient',
                component: PatientComponent
            },
            {
                path:'user-profile',
                component: UserProfileComponent
            },
            {
                path:'table-list',
                component: TableListComponent
            },
            {
                path:'preselect',
                component: PreselectComponent
            },
            {
                path:'report',
                component: ReportComponent
            },
        ]
      },

    // {
    //     path:'',
    //     redirectTo: 'table-list'
    // },
     
    // { path: 'patient',      component: PatientComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',         component: TableListComponent },
    // { path: 'preselect',          component: PreselectComponent },
    // { path: 'report',           component: ReportComponent }
    // {
    //     path: '',
    //     component: AdminLayoutComponent,
    //     children: [
    //         {
    //             path:'',
    //             redirectTo: 'table-list'
    //         },
    //         {
    //             path:'table-list',
    //             component: TableListComponent
    //         },
    //         {
    //             path:'patient',
    //             component: PatientComponent
    //         },
    //         {
    //             path:'user-profile',
    //             component: UserProfileComponent
    //         },
    //         {
    //             path:'preselect',
    //             component: PreselectComponent
    //         },
    //         {
    //             path:'report',
    //             component: ReportComponent
    //         },
    //     ]
    //   },
];
