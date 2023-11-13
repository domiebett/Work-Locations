import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ActionBarComponent } from './components/home/header/action-bar/action-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IconInputComponent } from './components/common/icon-input/icon-input.component';
import { IconToggleComponent } from './components/common/icon-toggle/icon-toggle.component';
import { ButtonComponent } from './components/common/button/button.component';
import { ListViewComponent } from './components/home/list-view/list-view.component';
import { LocationAccordionComponent } from './components/home/list-view/location-accordion/location-accordion.component';
import { LocationDetailsComponent } from './components/home/list-view/location-accordion/location-details/location-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ActionBarComponent,
        IconInputComponent,
        IconToggleComponent,
        ButtonComponent,
        ListViewComponent,
        LocationAccordionComponent,
        LocationDetailsComponent,
      ],
      imports: [
        MatDialogModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'work-locations'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('work-locations');
  });
});
