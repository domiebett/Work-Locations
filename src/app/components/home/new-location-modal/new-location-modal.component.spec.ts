import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationModalComponent } from './new-location-modal.component';

describe('NewLocationModalComponent', () => {
  let component: NewLocationModalComponent;
  let fixture: ComponentFixture<NewLocationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLocationModalComponent]
    });
    fixture = TestBed.createComponent(NewLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
