import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/request/request.service";
import {NotificationService} from "../../../services/notification/notification.service";

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
  loadingAdd: boolean | any = false;

  newCoupon: any = {code: '', discount: '', desc: ''};

  constructor(private request: RequestService, private notify: NotificationService) {
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
    $('#addCoupon').collapse('show')
  }

  clearNewCoupon(){
    this.newCoupon = {code: '', discount: '', desc: ''};
    $('#addCoupon').collapse('show')
  }

  addCoupon(){
    this.loadingAdd = true;
    this.request.post('coupons/add-coupon', this.newCoupon).subscribe((res: any) => {
      this.loadingAdd = false;
      $('#addCoupon').collapse('toggle');
      this.notify.notification.next({type: 'success', title: '', content: res.detail })
      this.getCoupon();
    },(error) => {
      this.loadingAdd = false;
      this.notify.notification.next({type: 'danger', title: '', content: error })
    });
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
    this.request.post('coupons/delete-coupon/' + coupon.id, '').subscribe((res: any) => {
      this.getCoupon();
      this.notify.notification.next({type: 'success', title: '', content: res.detail })
    },(error) => {
      this.notify.notification.next({type: 'danger', title: '', content: error })
    });
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
