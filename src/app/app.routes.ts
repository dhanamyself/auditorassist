import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard'; 

export const appRoutes: Routes = [
    { path: '/admin/signin', component: LoginComponent },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [authGuard] 
    },
  ];
