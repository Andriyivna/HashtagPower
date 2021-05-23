import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { DesignComponent } from './design/design.component';
import { SettingsComponent } from './settings/settings.component';
import { GeneralSettingsComponent } from './settings/general-settings/general-settings.component';
import { MatListModule } from '@angular/material/list';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { CallbackServiceSettingsComponent } from './settings/callback-service-settings/callback-service-settings.component';
import { BookingServiceSettingsComponent } from './settings/booking-service-settings/booking-service-settings.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentComponent,
    DesignComponent,
    SettingsComponent,
    GeneralSettingsComponent,
    AccountSettingsComponent,
    CallbackServiceSettingsComponent,
    BookingServiceSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
