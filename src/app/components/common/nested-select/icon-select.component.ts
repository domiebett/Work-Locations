import { Component, Input } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrls: ['./icon-select.component.scss'],
})
export class IconSelectComponent {
  @Input() options!: any[];
  @Input() placeholder: string = '-- Select an option --';

  selectedOption: string = '';
  expanded: boolean = false;

  locationDot = faLocationDot;

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }
}
