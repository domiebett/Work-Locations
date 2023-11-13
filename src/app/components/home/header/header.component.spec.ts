import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IconInputComponent } from '../../common/icon-input/icon-input.component';
import { IconToggleComponent } from '../../common/icon-toggle/icon-toggle.component';
import { ButtonComponent } from '../../common/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        ActionBarComponent,
        IconInputComponent,
        IconToggleComponent,
        ButtonComponent
      ],
      imports: [MatDialogModule, ReactiveFormsModule, FontAwesomeModule, FormsModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
