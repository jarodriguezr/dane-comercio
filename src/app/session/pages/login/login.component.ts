import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.formulario = this.crearFormulario();
  }

  crearFormulario(): FormGroup {  
    
    const formulario = new FormGroup({      
      usuario: new FormControl( 'jmartinez.consalfa@gmail.com', [ Validators.required ] ),
      clave: new FormControl( '123', [ Validators.required ] ),      
    });
    
    return formulario;
  }

  submit(){
    this.router.navigate(['home']);
    // if(this.formulario.invalid){
    //     this.formulario.markAllAsTouched();
    // } else {
      
    //   this.sessionService.login(this.formulario.getRawValue()).subscribe( resp => {                
    //     this.sessionService.setSession(resp);
    //     this.formulario.reset();
    //     this.router.navigate(['home']);
        
    //   }, err => {        
        
    //     // @TODO, colocar alerta de error 
    //   });
   // }
    
  }

}
