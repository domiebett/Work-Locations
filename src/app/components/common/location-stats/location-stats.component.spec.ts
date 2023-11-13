import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStatsComponent } from './location-stats.component';

describe('LocationStatsComponent', () => {
  let component: LocationStatsComponent;
  let fixture: ComponentFixture<LocationStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationStatsComponent]
    });
    fixture = TestBed.createComponent(LocationStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
