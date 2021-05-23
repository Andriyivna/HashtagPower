import { Component, OnInit } from '@angular/core';
declare const FB:any;
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  status: string = '';

  constructor() { }

  FB_login():void {
    FB.login((response: any) => {
      console.log(response);
      if (response.status === 'connected') {
        // Logged into your webpage and Facebook.
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    }, {scope: 'instagram_basic,pages_show_list'})
  }

  ngOnInit(): void {
    setTimeout(()=>{
      FB.getLoginStatus((response:any) => {
        console.log(response);
        this.status=response.status;
      });
    }, 3000);
  }
}
