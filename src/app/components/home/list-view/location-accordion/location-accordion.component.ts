import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationNode } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location-accordion',
  templateUrl: './location-accordion.component.html',
  styleUrls: ['./location-accordion.component.scss'],
})
export class LocationAccordionComponent {
  @Input() location!: LocationNode;
  @Input() isTopLevel: boolean = false;
  @Output() dragstart = new EventEmitter<DragEvent>();
  @Output() dragover = new EventEmitter<DragEvent>();

  expanded: boolean = false;

  toggleActiveState(event: Event) {
    event.stopPropagation();
    if (this.hasLocations()) {
      this.expanded = !this.expanded;
    }
  }

  hasLocations(): boolean {
    return this.location.locations && this.location.locations.length > 0;
  }

  isExpanded(): boolean {
    return this.hasLocations() && this.expanded;
  }
}
