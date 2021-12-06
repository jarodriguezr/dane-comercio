import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from 'src/app/session/services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(    
    private sessionService: SessionService,
    private router: Router
  ) { }

  canActivate() {

    const token = this.sessionService.getToken();      

    if (token) {
      this.sessionService.token = token;
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
