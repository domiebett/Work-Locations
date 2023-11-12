import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BtnTheme } from 'src/app/types/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() theme!: BtnTheme;
  @Input() type: string = 'button';
  @Output() click = new EventEmitter();

  onClick() {
    this.click.emit();
  }
}
