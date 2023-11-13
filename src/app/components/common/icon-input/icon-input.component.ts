import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss'],
})
export class IconInputComponent {
  @Input() icon?: IconDefinition;
  @Input() name!: string;
  @Input() placeHolder: string = 'Enter text';
  @Input() value: string = '';
  @Input() readonly: boolean = false;
  @Input() form!: FormGroup;

  get inputControl() {
    return this.form.get(this.name);
  }
}
