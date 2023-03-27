import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ableneo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Button Label';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Output() buttonClick = new EventEmitter<void>();

  protected getIconColor() {
    return this.type == 'primary' ? 'white' : 'black';
  }

  protected onClick(): void {
    this.buttonClick.emit();
  }
}
