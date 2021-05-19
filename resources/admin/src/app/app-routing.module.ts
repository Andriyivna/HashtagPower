import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { DesignComponent } from './design/design.component';
import { SettingsComponent } from './settings/settings.component';
import { GeneralSettingsComponent } from './settings/general-settings/general-settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { BookingServiceSettingsComponent } from './settings/booking-service-settings/booking-service-settings.component';
import { CallbackServiceSettingsComponent } from './settings/callback-service-settings/callback-service-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'design',
    component: DesignComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {path: 'general', component: GeneralSettingsComponent},
      {path: 'account', component: AccountSettingsComponent},
      {path: 'booking', component: BookingServiceSettingsComponent},
      {path: 'callback', component: CallbackServiceSettingsComponent},
      { path: '**', redirectTo: 'general'}
    ]
  },
  { path: '**', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
