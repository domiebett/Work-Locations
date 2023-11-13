import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { LocationAccordionComponent } from './list-view/location-accordion/location-accordion.component';
import { ActionBarComponent } from './header/action-bar/action-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IconInputComponent } from '../common/icon-input/icon-input.component';
import { IconToggleComponent } from '../common/icon-toggle/icon-toggle.component';
import { ButtonComponent } from '../common/button/button.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LocationDetailsComponent } from './list-view/location-accordion/location-details/location-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStatsComponent } from '../common/location-stats/location-stats.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderComponent,
        LocationAccordionComponent,
        ActionBarComponent,
        IconInputComponent,
        IconToggleComponent,
        ButtonComponent,
        ListViewComponent,
        LocationDetailsComponent,
        LocationStatsComponent,
      ],
      imports: [
        MatDialogModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
