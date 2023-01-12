import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public $user: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
