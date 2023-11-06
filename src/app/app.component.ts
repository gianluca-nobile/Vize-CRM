import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {SessionService} from "./services/session/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'vize-crm';
  constructor(private translate: TranslateService, private session: SessionService, private route: Router) {
    this.translate.setDefaultLang('it');
    this.translate.use('it'); // Imposta la lingua predefinita
  }

  ngOnInit(): void {

  }
}
