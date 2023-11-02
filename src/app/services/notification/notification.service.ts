import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification = new Subject<{type: string; title: string; content: string}>()

  constructor() { }
}
