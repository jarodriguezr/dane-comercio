import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { environment } from 'src/environments/environment';
import { promise } from 'selenium-webdriver';
import { Observable } from 'rxjs';

const SERVER = environment.server;

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  token: string;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  public login( data: any ) {   
    var formData: any = new FormData();
    formData.append("grant_type", 'password');
    formData.append("client_id", SERVER.client_id);
    formData.append("client_secret", SERVER.client_secret);
    formData.append("username", data.usuario);
    formData.append("password", data.clave);
  
    
    return this.httpService.post('oauth/token', formData);   
  }

  public forgot(email:string){
    return new Observable( (promise) => {
      promise.next();
      promise.complete();
    });
  }

  public SingUp(data){
    return new Observable( (promise) => {
      promise.next();
      promise.complete();
    });
  }

  public logout(): void{    
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

  setSession( data: any ){
    console.log('data', data);
    this.token = data.access_token;
    this.setRegreshToken(data.refresh_token);
    this.setToken(data.access_token);
  }

  clearSession = () => localStorage.clear();
  
  getRegreshToken = () => localStorage.getItem('refreshToken');
  setRegreshToken = ( data: string ) => localStorage.setItem('refreshToken', data);

  getToken = () => localStorage.getItem('token');
  setToken = ( data: string ) => localStorage.setItem('token', data);

  getHeaders = () => new HttpHeaders()
              .set('Content-Type', 'application/json')
              .set('Authorization', 'Bearer ' + this.token);


  removeCurrentSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.token = null;
  }


}
