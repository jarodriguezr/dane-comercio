import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seccion-economico',
  templateUrl: './seccion-economico.component.html',
  styleUrls: ['./seccion-economico.component.scss']
})
export class SeccionEconomicoComponent implements OnInit {

  @Input() dataSeccion:any;
  @Input() formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {}

  toFormGroup( preguntas: any[] ) {
    const group: any = {};
    preguntas.forEach(item => {
      group[`pregunta-${item.idPregunta}`] = new FormControl('' , Validators.required);
    });
    return new FormGroup(group);
  }

}
