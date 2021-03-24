import { Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import {HomecomponentComponent} from '../../pages/homecomponent/homecomponent.component';
import {AuthLayoutComponent} from '../../layouts/auth-layout/auth-layout.component';

export const AuthLayoutRoutes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path:'',
                redirectTo: 'home'
            },
            {
                path:'home',
                component: HomecomponentComponent
            },
            {
                path:'login',
                component: LoginComponent
            },
        ]
      },
    
];
