import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import {  Subject } from 'rxjs';
import { takeUntil, } from 'rxjs/operators';
import { ParametricasService } from 'src/app/shared/services/parametricas/parametricas.service';
import { EconomicoService } from '../../services/economico/economico.service';

@Component({
  selector: 'app-pregunta-economico',
  templateUrl: './pregunta-economico.component.html',
  styleUrls: ['./pregunta-economico.component.scss']
})
export class PreguntaEconomicoComponent implements OnInit{

  @Input() pregunta:any;
  @Input() form: FormGroup;

  constructor() { } 

  ngOnInit(): void { 
  }
}
