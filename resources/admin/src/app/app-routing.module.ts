import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { DesignComponent } from './design/design.component';
import { SettingsComponent } from './settings/settings.component';

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
    component: SettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
