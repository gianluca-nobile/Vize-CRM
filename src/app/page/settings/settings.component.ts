import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/session/session.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  selectedTab = 1;

  settings: any;
  newSettings: any;

  constructor(private session: SessionService) {
  }

  ngOnInit(): void {
    this.selectedTab = 1;
    this.settings = this.session.getSettings();
    this.newSettings = Object.assign({}, this.settings);
  }

  saveSettings() {
    this.session.setSettings(this.newSettings);
    window.location.reload();
  }

  resetSettings() {
    this.session.setSettings(null);
    window.location.reload();
  }

  checkDisable() {
    return !Object.keys(this.settings).some((key) => this.settings[key] !== this.newSettings[key]);
  }
}
