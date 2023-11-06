import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setAuthToken(token: any){
    localStorage.setItem('token', JSON.stringify(token));
  }

  getAuthToken(): {access_token: string, token_type: string} {
    return JSON.parse(localStorage.getItem('token')+'');
  }

  clearStorage(){
    localStorage.clear();
  }
}
