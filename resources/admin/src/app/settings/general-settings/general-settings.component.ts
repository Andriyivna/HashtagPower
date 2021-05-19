import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {

  constructor( private  settingsService: SettingsService) { }
  websiteName = '';

  Save(): void {
    this.settingsService.set('site_name', this.websiteName);
  }

  update():void {
    this.settingsService.get('site_name').then((data) => {
      this.websiteName = data.value;
    });
  }


  ngOnInit(): void {
    this.update();
  }
}

