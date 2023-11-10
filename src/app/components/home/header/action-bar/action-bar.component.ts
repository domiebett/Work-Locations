import { Component } from '@angular/core';
import {
  IconDefinition,
  faBarsStaggered,
  faSearch,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons';
import { IconToggleOption } from 'src/app/types/icon-toggle';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent {
  currentView: string = 'list';
  searchIcon: IconDefinition = faSearch;
  viewToggleOptions: IconToggleOption[] = [
    { name: 'list', icon: faBarsStaggered, defaultChecked: true },
    { name: 'grid', icon: faTableCells },
  ];

  setCurrentView(currentView: string): void {
    this.currentView = currentView;
  }
}
