import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SessionService} from "../../services/session/session.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css', '../table/table.component.css']
})
export class TopBarComponent {
  @Input() title:string | undefined;
  @Input() buttons: any = undefined;
  @Input() items: any;
  @Output() refresh = new EventEmitter();

  constructor(private session: SessionService ) {
  }
  logout() {
    this.session.clearStorage();
  }
}
