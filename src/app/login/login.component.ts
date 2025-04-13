import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { UserService } from './../services/user.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  template: `
    <div style="text-align: center; margin-top: 100px;">
      <button (click)="login()">Sign in with Google</button>
    </div>
  `
})
export class LoginComponent {
  constructor(private auth: Auth, private router: Router, private userService: UserService) {}

  // Use popup sign-in instead of redirect
  login() {
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(this.auth, provider)  // Use popup method instead of redirect
      .then((result) => {
        const user = result.user;
        console.log('User signed in:', user.displayName);
        
        // Store the user information in the service
        this.userService.setUser(user);
        
        // Navigate to the dashboard
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error('Error during sign-in:', error.message); // Handle errors
      });
  }
}
