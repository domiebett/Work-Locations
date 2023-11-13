import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ButtonComponent } from './components/common/button/button.component';
import { GridViewComponent } from './components/home/grid-view/grid-view.component';
import { ListViewComponent } from './components/home/list-view/list-view.component';
import { IconInputComponent } from './components/common/icon-input/icon-input.component';
import { IconToggleComponent } from './components/common/icon-toggle/icon-toggle.component';
import { ActionBarComponent } from './components/home/header/action-bar/action-bar.component';
import { IconSelectComponent } from './components/common/nested-select/icon-select.component';
import { NewLocationModalComponent } from './components/home/new-location-modal/new-location-modal.component';
import { NestedOptionsComponent } from './components/common/nested-select/nested-options/nested-options.component';
import { LocationAccordionComponent } from './components/home/list-view/location-accordion/location-accordion.component';
import { LocationDetailsComponent } from './components/home/list-view/location-accordion/location-details/location-details.component';

import { LocationsService } from './services/locations.service';
import { ActiveViewService } from './services/active-view.service';
import { GridCardComponent } from './components/home/grid-view/grid-card/grid-card.component';
import { LocationStatsComponent } from './components/common/location-stats/location-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    HeaderComponent,
    GridViewComponent,
    ListViewComponent,
    ActionBarComponent,
    IconInputComponent,
    IconToggleComponent,
    IconSelectComponent,
    NestedOptionsComponent,
    LocationDetailsComponent,
    NewLocationModalComponent,
    LocationAccordionComponent,
    GridCardComponent,
    LocationStatsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatDialogModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [ActiveViewService, LocationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
