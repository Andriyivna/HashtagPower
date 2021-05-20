import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {

  constructor( private  settingsService: SettingsService) { }
  websiteName = '';

  contactsForm = new FormGroup({
    company: new FormControl('',[]),
    email: new FormControl('',[Validators.email]),
    phone: new FormControl('',[]),
    address: new FormControl('',[]),
  });

  generalForm = new FormGroup({
    websiteName: new FormControl('',[]),
    websiteDescription: new FormControl('',[]),
  });

  SaveGeneralSettings(): void {
    this.settingsService.set('site_name',  this.generalForm.get('websiteName')?.value);
    this.settingsService.set('site_description',  this.generalForm.get('websiteDescription')?.value);
  }
  SaveContactsSettings():void {
    this.settingsService.set('contacts_company_name',  this.contactsForm.get('company')?.value);
    this.settingsService.set('contacts_email',  this.contactsForm.get('email')?.value);
    this.settingsService.set('contacts_telephone',  this.contactsForm.get('phone')?.value);
    this.settingsService.set('contacts_address',  this.contactsForm.get('address')?.value);

  }

  update():void {
    this.settingsService.get('site_name').then((data) => {
      this.generalForm.get('websiteName')?.setValue(data.value);
    });
    this.settingsService.get('site_description').then((data) => {
      this.generalForm.get('websiteDescription')?.setValue(data.value);
    });
    this.settingsService.get('contacts_company_name').then((data) => {
      this.contactsForm.get('company')?.setValue(data.value);
    });
    this.settingsService.get('contacts_email').then((data) => {
      this.contactsForm.get('email')?.setValue(data.value);
    });
    this.settingsService.get('contacts_telephone').then((data) => {
      this.contactsForm.get('phone')?.setValue(data.value);
    });
    this.settingsService.get('contacts_address').then((data) => {
      this.contactsForm.get('address')?.setValue(data.value);
    });

  }


  ngOnInit(): void {
    this.update();
  }
}

