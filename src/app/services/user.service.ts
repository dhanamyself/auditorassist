// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);

  setUser(user: User | null) {
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}
