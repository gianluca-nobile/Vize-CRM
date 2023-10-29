import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vize-crm';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('it');
    translate.use('it'); // Imposta la lingua predefinita
  }
}
