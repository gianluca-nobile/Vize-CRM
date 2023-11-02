import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../../services/request/request.service";
import {SessionService} from "../../services/session/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  showPsw = false;
  loginForm = {username: '', password: ''}

  constructor(private route: Router, private request: RequestService, private session: SessionService) {
  }

  login(){
    this.loading = true;
    this.request.login(this.loginForm).subscribe((res: any) => {
      this.session.setAuthToken(res.token);
      this.loading = false;
      this.route.navigate(['/dashboard']);
    },(error) => {
      this.loading = false;
    })
  }
}
