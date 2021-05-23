import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SettingsResponse {
  value: any;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }
  readonly ApiURL = '//hashtagpower.loc/api/settings/';

  set(name: string, value:any){
    return this.http.put<SettingsResponse>(this.ApiURL + name, value).toPromise()

  }

  get(name: string):Promise<SettingsResponse>{
    return this.http.get<SettingsResponse>(this.ApiURL + name).toPromise();
  }
}
