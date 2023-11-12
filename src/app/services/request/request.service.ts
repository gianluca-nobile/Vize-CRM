import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment";
import {SessionService} from "../session/session.service";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient, private session: SessionService) { }

  getUrl() {
    if(this.session.getSettings().environment === 'prod'){
      return environment.apiUrlProd;
    }else {
      return environment.apiUrlDev;
    }
  }

  post(path: string, body: any){
    return this.http.post( this.getUrl() + 'admin/' + path, body);
  }
  get(path: string){
    return this.http.get( this.getUrl() + 'admin/' + path);
  }
  delete(path: string){
    return this.http.delete( this.getUrl() + 'admin/' + path);
  }

  login(body: any){
    return this.http.post( this.getUrl() + 'auth/login', body);
  }
}
