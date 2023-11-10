import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconToggleOption } from 'src/app/types/icon-toggle';

@Component({
  selector: 'app-icon-toggle',
  templateUrl: './icon-toggle.component.html',
  styleUrls: ['./icon-toggle.component.scss'],
})
export class IconToggleComponent {
  @Input()
  set options(opts: IconToggleOption[]) {
    this._options = opts;

    this.selectedOption = opts[0].name;
  }

  @Output() onChange = new EventEmitter<string>();

  selectedOption?: string;
  _options!: IconToggleOption[];

  onToggleChange() {
    this.onChange.emit(this.selectedOption);
  }
}
