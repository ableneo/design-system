import { Component, Input } from '@angular/core';

@Component({
  selector: 'ableneo-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss']
})
export class FormLayoutComponent {
  @Input() columns = 1;
  @Input() heading = 'Form Heading';

  get templateColumnsString() {
    return `repeat(${this.columns}, 1fr)`;
  }
}
