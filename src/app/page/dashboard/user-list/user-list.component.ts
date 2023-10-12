import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  columns: Array<object> | undefined
  userLists: any;

  ngOnInit(): void {
    this.generateColumn();
    this.userLists = []
  }

  generateColumn(){
    this.columns = [
      {name: 'name', type: ['string']},
      {name: 'name1', type: ['string']},
      {name: 'name2', type: ['string']},
      {name: 'usage', type: ['string']},
      {name: 'sales', type: ['string']},
      {name: 'status', type: ['boolean']},
      {name: 'active', type: ['enableDisable']},
      {name: 'action', type: ['delete']}
    ]
  }

}
