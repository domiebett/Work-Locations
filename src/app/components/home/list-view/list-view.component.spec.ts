import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewComponent } from './list-view.component';
import { LocationAccordionComponent } from './location-accordion/location-accordion.component';
import { LocationDetailsComponent } from './location-accordion/location-details/location-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationStatsComponent } from '../../common/location-stats/location-stats.component';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListViewComponent,
        LocationAccordionComponent,
        LocationDetailsComponent,
        LocationStatsComponent
      ],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
