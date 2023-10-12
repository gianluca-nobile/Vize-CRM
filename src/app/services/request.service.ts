import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url = 'https://vize-backend.herokuapp.com/admin/';
  prod_url = 'https://vize-backend-prod.herokuapp.com/admin/';
  private environment: any;


  constructor(private http: HttpClient) { }

  getUrl() {
    return this.url;
  }

  post(path: string, body: any){
    return this.http.post( this.getUrl() + path, body);
  }
  get(path: string){
    return this.http.get( this.getUrl() + path);
  }
  delete(path: string){
    return this.http.delete( this.getUrl() + path);
  }
}
