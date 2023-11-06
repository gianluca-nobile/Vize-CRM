import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session/session.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public route: Router, private session: SessionService) {
  }

  logout() {
    this.session.clearStorage();
  }
}
