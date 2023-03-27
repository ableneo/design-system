import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from '../input/input.module';
import { FormElementComponent } from './form-element.component';

@NgModule({
  declarations: [FormElementComponent],
  imports: [CommonModule, InputModule],
  exports: [FormElementComponent]
})
export class FormElementModule {}
