import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/request.service";

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit{

  columns: Array<object> | undefined
  coupons: any;
  topBarBtn: Array<any> = [];
  loading: boolean | any = false;

  constructor(private request: RequestService) {
  }

  ngOnInit(): void {
    this.generateColumn();
    this.generateTobBarBtn();
    this.getCoupon();
    this.coupons = [
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,},
      {name: 'prova', name1: 'prova', name2: 'prova', usage: 123, sales: '20%', status: true, active: true,},
      {name: 'prova1', name1: 'prova', name2: 'prova', usage: 988, sales: '10%', status: false, active: false,}
    ]
  }

  generateTobBarBtn(){
    this.topBarBtn.push({title: 'Add coupon',  icon: 'bi bi-plus-lg', event_: () => this.openAddModal()});
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
      {name: 'action', type: ['edit','delete']}
    ]
  }

  openAddModal(){
    console.log('open modal')
  }

  getCoupon(){
    this.loading = true;
    this.request.post('coupons/all', '').subscribe((res) => {
      console.log(res);
      this.loading = false;
    },(error) => {
      console.log(error);
      this.loading = error;
    })
  }

  editCoupon(index: number){
    const coupon = this.coupons[index]
    console.log(coupon)
  }

  deleteCoupon(index: number){
    const coupon = this.coupons[index]
    console.log(coupon)
  }

  switchTableEvent(event: any){
    const index = event.index;
    const action = event.action;
    if (action === 'edit'){
      this.editCoupon(index);
    }else if (action === 'delete'){
      this.deleteCoupon(index);
    }
  }



}
