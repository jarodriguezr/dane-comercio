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

  constructor() { }

  ngOnInit(): void {
  }

}
