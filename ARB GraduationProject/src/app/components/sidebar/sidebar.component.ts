import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'table-list', title: 'Worklist',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: 'patient', title: 'Patient Form',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: 'preselect', title: 'Worksheet',  icon:'ni-planet text-blue', class: '' },
    { path: 'report', title: 'Final Report',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: 'user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: 'viewer', title: 'Report PDF',  icon:'ni-single-02 text-yellow', class: '' }
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
