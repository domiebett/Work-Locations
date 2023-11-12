import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOptionService } from 'src/app/services/select-option.service';
import { LocationNode } from 'src/app/utils/location-node';

@Component({
  selector: 'app-nested-options',
  templateUrl: './nested-options.component.html',
  styleUrls: ['./nested-options.component.scss']
})
export class NestedOptionsComponent {
  @Input() location!: LocationNode;

  constructor(private selectOptionService: SelectOptionService) {}

  onClick() {
    this.selectOptionService.updateSelectedOption(this.location);
  }
}
