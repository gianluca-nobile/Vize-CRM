import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() columns: Array<object> | any;
  @Input() items: any;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() enableDisable = new EventEmitter();

  ngOnInit(): void {

  }

}
