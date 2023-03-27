import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { InputApiModel } from '../models/input-api.model';
import { InputType } from '../models/input-type.model';

@Component({
  selector: 'ableneo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements InputApiModel {
  @Input() inputType: InputType = InputType.text;
  @Input() placeholder: string | undefined;
  @Input() value: string | undefined;
  @Input() id?: string;
  @ViewChild('input', { static: false }) protected input!: ElementRef<HTMLInputElement>;

  get text(): string {
    return this.input.nativeElement.value;
  }
}
