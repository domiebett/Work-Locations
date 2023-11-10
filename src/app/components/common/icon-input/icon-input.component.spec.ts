import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconInputComponent } from './icon-input.component';

describe('TextInputComponent', () => {
  let component: IconInputComponent;
  let fixture: ComponentFixture<IconInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconInputComponent]
    });
    fixture = TestBed.createComponent(IconInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
