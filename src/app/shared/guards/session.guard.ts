import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from 'src/app/session/services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(    
    private sessionService: SessionService,
    private router: Router
  ) { }

  canActivate() {    

    const token = this.sessionService.getRegreshToken();      

    if (token) {
      this.router.navigate(['home']);      
      return false;
    } else {      
      return true;
    }
  }
  
}
