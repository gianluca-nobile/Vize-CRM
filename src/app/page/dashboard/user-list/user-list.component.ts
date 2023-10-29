import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  columns: Array<object> | undefined
  userLists: any;
  topBarBtn: Array<any> = [];

  ngOnInit(): void {
    this.generateColumn();
    this.getUserList();
    this.generateTobBarBtn();
  }

  getUserList(){
    this.userLists = [
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,}
    ]
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
      {name: 'credits', type: ['add', 'remove']}
    ]
  }

  generateTobBarBtn(){
    this.topBarBtn.push({title: 'Add user',  icon: 'bi bi-plus-lg', event_: () => this.openAddModal()});
  }

  openAddModal(){
    console.log('open modal')
  }

  addCreditsUser(index: number){
    const user = this.userLists[index]
    console.log(user)
  }

  removeCreditsUser(index: number){
    const user = this.userLists[index]
    console.log(user)
  }

  switchTableEvent(event: any){
    const index = event.index;
    const action = event.action;
    if (action === 'add'){
      this.addCreditsUser(index);
    }else if (action === 'remove'){
      this.removeCreditsUser(index);
    }
  }

}
