import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnType } from 'src/app/types/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() type!: BtnType;
  @Output() click = new EventEmitter();

  onClick() {
    this.click.emit();
  }
}
