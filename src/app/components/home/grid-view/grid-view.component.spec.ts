import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewComponent } from './grid-view.component';
import { BreadcrumbsComponent } from '../../grid-view/breadcrumbs/breadcrumbs.component';
import { GridCardComponent } from './grid-card/grid-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationStatsComponent } from '../../common/location-stats/location-stats.component';

describe('GridViewComponent', () => {
  let component: GridViewComponent;
  let fixture: ComponentFixture<GridViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridViewComponent,
        BreadcrumbsComponent,
        GridCardComponent,
        LocationStatsComponent,
      ],
      imports: [FontAwesomeModule],
    });
    fixture = TestBed.createComponent(GridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
