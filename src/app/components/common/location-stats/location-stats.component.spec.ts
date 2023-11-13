import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStatsComponent } from './location-stats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('LocationStatsComponent', () => {
  let component: LocationStatsComponent;
  let fixture: ComponentFixture<LocationStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationStatsComponent],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(LocationStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
