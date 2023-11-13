import { Component, OnInit } from '@angular/core';
import { ActiveViewService } from 'src/app/services/active-view.service';
import { LocationView } from 'src/app/types/view';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeView: LocationView = 'grid';

  constructor(private activeViewService: ActiveViewService) {}

  ngOnInit(): void {
    this.activeViewService.activeViewChanged.subscribe((activeView: LocationView) =>
      this.onActiveViewChange(activeView)
    );
  }

  onActiveViewChange(activeView: LocationView): void {
    this.activeView = activeView;
  }
}
