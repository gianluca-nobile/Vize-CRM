import { Component } from '@angular/core';
import {SessionService} from "../../services/session/session.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private session: SessionService) {
  }

  logout() {
    this.session.clearStorage();
  }

  openSettings() {
    $('#settingsModal').modal(
      {
        backdrop: 'static',
        keyboard: false
      }
    );
  }
}
