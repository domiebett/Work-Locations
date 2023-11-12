import { Component, Input } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { SelectOptionService } from 'src/app/services/select-option.service';

@Component({
  selector: 'app-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrls: ['./icon-select.component.scss'],
})
export class IconSelectComponent {
  @Input() locations!: any[];
  @Input() placeholder: string = '-- Select an option --';
  
  selectedOption: string = '';
  expanded: boolean = false;

  locationDot = faLocationDot;

  constructor(private selectOptionService: SelectOptionService) {}

  ngOnInit(): void {
    this.selectOptionService.selectedOption$.subscribe((location) => {
      this.selectedOption = location?.name ?? '';
    });
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }
}
