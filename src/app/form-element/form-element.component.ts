import { Component, Input, ViewChild } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { InputApiModel } from '../models/input-api.model';
import { InputType } from '../models/input-type.model';

@Component({
  selector: 'ableneo-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements InputApiModel {
  uuid: string;

  @Input() inputType: InputType = InputType.text;
  @Input() placeholder?: string;
  @Input() value?: string;
  @Input() label = 'Input Label';
  @ViewChild(InputComponent, { static: false }) input!: InputComponent;

  constructor() {
    this.uuid = crypto.randomUUID();
  }

  get text(): string {
    return this.input.text;
  }
}
