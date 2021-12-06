import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-textbox',
  templateUrl: './input-textbox.component.html',
  styleUrls: ['./input-textbox.component.scss']
})
export class InputTextboxComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() pregunta: any;

  constructor() { }

  ngOnInit(): void {
  }

}
