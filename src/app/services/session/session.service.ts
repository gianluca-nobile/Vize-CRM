import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private translate: TranslateService) { }

  setAuthToken(token: any){
    localStorage.setItem('token', JSON.stringify(token));
  }

  getAuthToken(): {access_token: string, token_type: string} {
    return JSON.parse(localStorage.getItem('token')+'');
  }

  clearStorage(){
    const lang = this.getSettings().lang;
    localStorage.clear();
    if (lang){
      this.setSettings({lang: lang, environment: 'dev'});
    }
  }

  setSettings(settings: any){
    const defaultSettings = {
      lang: 'it',
      environment: 'dev'
    }
    if (settings){
      localStorage.setItem('settings', JSON.stringify(settings));
    }else {
      localStorage.setItem('settings', JSON.stringify(defaultSettings));
    }
  }

  getSettings(){
    if (!localStorage.getItem('settings')){
      this.setSettings(null);
    }
    return JSON.parse(localStorage.getItem('settings')+'');
  }
}
