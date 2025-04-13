import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="user; else loading">
      <h1>Welcome, {{ user.displayName }}!</h1>
      <button>Search</button>
    </div>

    <ng-template #loading>
      <p>Redirecting to sign in...</p>
    </ng-template>
  `
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      if (!user) {
        this.router.navigate(['/']);
      } else {
        this.user = user;
      }
    });
  }
}
