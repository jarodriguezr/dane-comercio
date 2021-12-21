import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text-default',
  templateUrl: './input-text-default.component.html',
  styleUrls: ['./input-text-default.component.scss']
})
export class InputTextDefaultComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() pregunta: any;
  public valorDefecto:string="";

  constructor() { 
    
    
  }

  public isDisabled= true;

  ngOnInit(): void {
    if(this.pregunta?.soloLectura)
    this.form.controls[this.pregunta.formName].disable();

    if(this.pregunta?.valorDefecto)
      this.valorDefecto=this.pregunta.valorDefecto;
    
  }

}
