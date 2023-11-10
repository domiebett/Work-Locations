import { Component, Input } from '@angular/core';
import { BtnType } from 'src/app/types/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() type!: BtnType;
}
