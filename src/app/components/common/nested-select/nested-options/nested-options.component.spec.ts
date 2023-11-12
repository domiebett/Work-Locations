import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedOptionsComponent } from './nested-options.component';

describe('NestedOptionsComponent', () => {
  let component: NestedOptionsComponent;
  let fixture: ComponentFixture<NestedOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedOptionsComponent]
    });
    fixture = TestBed.createComponent(NestedOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
