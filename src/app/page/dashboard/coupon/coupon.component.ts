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

  constructor(private request: RequestService) {
  }

  ngOnInit(): void {
    this.generateColumn();
    this.getCoupon();
    this.coupons = [
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
      {name: 'name', type: 'string'},
      {name: 'name1', type: 'string'},
      {name: 'name2', type: 'string'},
      {name: 'usage', type: 'number'},
      {name: 'sales', type: 'string'},
      {name: 'status', type: 'boolean'},
      {name: 'active', type: 'enableDisable'},
      {name: 'action', type: 'delete'}
    ]
  }

  getCoupon(){
    this.request.post('admin/coupons/all', '').subscribe((res) => {
      console.log(res)
    })
  }



}
