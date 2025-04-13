import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { firebaseConfig } from './app/firebase.config';

import { authGuard } from './app/guards/auth.guard'; 
import { LoginComponent } from './app/login/login.component'; 
import { DashboardComponent } from './app/dashboard/dashboard.component'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'admin/signin', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }, 
    ]),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
});
