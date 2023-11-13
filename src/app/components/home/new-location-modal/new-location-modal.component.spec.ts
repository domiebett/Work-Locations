import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationModalComponent } from './new-location-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconInputComponent } from '../../common/icon-input/icon-input.component';
import { IconSelectComponent } from '../../common/nested-select/icon-select.component';
import { ButtonComponent } from '../../common/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('NewLocationModalComponent', () => {
  let component: NewLocationModalComponent;
  let fixture: ComponentFixture<NewLocationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewLocationModalComponent,
        IconInputComponent,
        IconSelectComponent,
        ButtonComponent,
      ],
      imports: [
        MatDialogModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    });
    fixture = TestBed.createComponent(NewLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
