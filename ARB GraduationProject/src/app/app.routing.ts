import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutModule} from './layouts/auth-layout/auth-layout.module';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes =[
 
  {
    path: '',
    loadChildren: ()=> AuthLayoutModule
  },

  {
    path: 'dash',
    loadChildren: ()=> AdminLayoutModule
  },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: ()=> AuthLayoutModule
  //     }
  //   ]
  // },
  //  {
  //   path: '**',
  //   redirectTo: 'table-list'
  // },

  // {
  //   path: '',
  //   redirectTo: 'table-list',
  //   pathMatch: 'full',
  // },
  //  {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: 'dash',
  //       loadChildren: ()=> AdminLayoutModule
  //     }
  //   ]
  // }, 
  
   

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
