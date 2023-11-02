import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/request/request.service";

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
  }

  generateTobBarBtn(){
    this.topBarBtn.push({title: 'Add coupon',  icon: 'bi bi-plus-lg', event_: () => this.openAddModal()});
  }

  generateColumn(){
    this.columns = [
      {name: 'id', type: ['string']},
      {name: 'code', type: ['string']},
      {name: 'discount', type: ['string']},
      {name: 'desc', type: ['string']},
      {name: 'action', type: ['edit','delete']}
    ]
  }

  openAddModal(){
    console.log('open modal')
  }

  getCoupon(){
    this.loading = true;
    this.request.post('coupons/all', '').subscribe((res) => {
      this.coupons = res;
      this.loading = false;
    },(error) => {
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
