import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOptionService } from 'src/app/services/select-option.service';
import { Location } from 'src/app/types/location';

@Component({
  selector: 'app-nested-options',
  templateUrl: './nested-options.component.html',
  styleUrls: ['./nested-options.component.scss']
})
export class NestedOptionsComponent {
  @Input() location!: Location;

  constructor(private selectOptionService: SelectOptionService) {}

  onClick() {
    this.selectOptionService.updateSelectedOption(this.location);
  }
}
