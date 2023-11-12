import { Component } from '@angular/core';
import {
  IconDefinition,
  faBarsStaggered,
  faSearch,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons';
import { ActiveViewService } from 'src/app/services/active-view.service';
import { ModalService } from 'src/app/services/modal.service';
import { IconToggleOption } from 'src/app/types/icon-toggle';
import { LocationView } from 'src/app/types/view';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  searchIcon: IconDefinition = faSearch;
  viewToggleOptions: IconToggleOption[] = [
    { name: 'list', icon: faBarsStaggered, defaultChecked: true },
    { name: 'grid', icon: faTableCells },
  ];

  constructor(private activeViewService: ActiveViewService, private modalService: ModalService) {}

  setCurrentView(currentView: string): void {
    this.activeViewService.activeViewChanged.emit(currentView as LocationView);
  }

  showNewLocationModal(): void {
    this.modalService.openNewLocationModal();
  }
}
