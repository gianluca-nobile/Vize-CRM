import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css', '../table/table.component.css']
})
export class TopBarComponent {
  @Input() title:string | undefined;
  @Input() items: any;
  @Output() refresh = new EventEmitter();

}
