import { Component } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private session: SessionService, private route: Router) {
  }

  logout() {
    this.session.clearStorage();
    this.route.navigate(['/login']);
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
