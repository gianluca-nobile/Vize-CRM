import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/request/request.service";
import {NotificationService} from "../../../services/notification/notification.service";
import {TranslateService} from "@ngx-translate/core";
import {UtilsService} from "../../../services/utils/utils.service";

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
  loadingEdit: boolean | any = false;

  newCoupon: any = {code: '', discount: '', desc: ''};
  selectedCoupon: any;

  constructor(private request: RequestService, private notify: NotificationService, private translate: TranslateService, private utils: UtilsService) {
  }

  ngOnInit(): void {
    this.generateColumn();
    this.generateTobBarBtn();
    this.getCoupon();
  }

  generateTobBarBtn(){
    this.topBarBtn.push({title: this.translate.instant('COUPON.ADD_COUPON'),  icon: 'bi bi-plus-lg', event_: () => this.openAddModal()});
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
    $('#addCoupon').collapse('show');
    this.utils.scrollToTop();
  }

  clearNewCoupon(){
    this.newCoupon = {code: '', discount: '', desc: ''};
    $('#addCoupon').collapse('toggle')
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

  openEditCoupon(index: number){
    this.selectedCoupon = {...this.coupons[index]};
    $('#editCouponModal').modal({
      backdrop: 'static',
      keyboard: false
    });
  }

  editCoupon(){
    this.loadingEdit = true;
    this.request.post('coupons/update-coupon/' + this.selectedCoupon.id, this.selectedCoupon).subscribe((res: any) => {
      this.loadingEdit = false;
      $('#editCouponModal').modal('hide');
      this.notify.notification.next({type: 'success', title: '', content: res.detail })
      this.getCoupon();
    },(error) => {
      this.loadingEdit = false;
      this.notify.notification.next({type: 'danger', title: '', content: error })
    });
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
      this.openEditCoupon(index);
    }else if (action === 'delete'){
      this.deleteCoupon(index);
    }
  }



}
