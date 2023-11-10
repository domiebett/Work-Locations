import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconToggleComponent } from './icon-toggle.component';

describe('IconToggleComponent', () => {
  let component: IconToggleComponent;
  let fixture: ComponentFixture<IconToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconToggleComponent]
    });
    fixture = TestBed.createComponent(IconToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
