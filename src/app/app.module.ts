import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GridViewComponent } from './components/home/grid-view/grid-view.component';
import { ListViewComponent } from './components/home/list-view/list-view.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ButtonComponent } from './components/common/button/button.component';
import { ActionBarComponent } from './components/home/header/action-bar/action-bar.component';
import { IconInputComponent } from './components/common/icon-input/icon-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconToggleComponent } from './components/common/icon-toggle/icon-toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridViewComponent,
    ListViewComponent,
    HeaderComponent,
    ButtonComponent,
    ActionBarComponent,
    IconInputComponent,
    IconToggleComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
