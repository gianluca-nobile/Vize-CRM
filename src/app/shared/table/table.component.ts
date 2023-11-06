import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  @Input() columns: Array<object> | any;
  @Input() items: any;
  @Input() loading: any = false;
  @Output() btnAction = new EventEmitter();
  selectIndex: number | any;
  ngOnInit(): void {
  }

  playAction(index: number, action: string, value?: any) {
    const btnAction = {
      index: index,
      action: action,
      value: value
    }
    this.btnAction.emit(btnAction)
  }

  confirmDelete(index: number){
    this.selectIndex = index;
    $('#confirmDeleteModal').modal({
      backdrop: 'static',
      keyboard: false
    })
  }

}
