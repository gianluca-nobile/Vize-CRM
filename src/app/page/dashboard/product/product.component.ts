import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/request/request.service";
import {NotificationService} from "../../../services/notification/notification.service";
import {TranslateService} from "@ngx-translate/core";
import {UtilsService} from "../../../services/utils/utils.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  columns: Array<object> | undefined
  products: any;
  topBarBtn: Array<any> = [];
  loading: boolean | any = false;
  loadingAdd: boolean | any = false;
  loadingEdit: boolean | any = false;

  newProducts: any = {amount: '', credit: ''};
  selectedProduct: any;

  constructor(private request: RequestService, private notify: NotificationService, private translate: TranslateService, private utils: UtilsService) {
  }

  ngOnInit(): void {
    this.generateColumn();
    this.generateTobBarBtn();
    this.getProducts();
  }

  generateTobBarBtn(){
    this.topBarBtn.push({title: this.translate.instant('PRODUCT.ADD_PRODUCT'),  icon: 'bi bi-plus-lg', event_: () => this.openAddModal()});
  }

  generateColumn(){
    this.columns = [
      {name: 'id', type: ['string']},
      {name: 'amount', type: ['string']},
      {name: 'credits', type: ['string']},
      {name: 'action', type: ['edit','delete']}
    ]
  }

  openAddModal(){
    $('#addProducts').collapse('show');
    this.utils.scrollToTop();
  }

  clearNewProducts(){
    this.newProducts = {amount: '', credit: ''};
    $('#addProducts').collapse('toggle')
  }

  addProduct(){
    this.loadingAdd = true;
    this.request.post('products/add-product', this.newProducts).subscribe((res: any) => {
      this.loadingAdd = false;
      $('#addProducts').collapse('toggle');
      this.notify.notification.next({type: 'success', title: '', content: res.detail })
      this.getProducts();
    },(error) => {
      this.loadingAdd = false;
      this.notify.notification.next({type: 'danger', title: '', content: error })
    });
  }

  getProducts(){
    this.loading = true;
    this.request.post('products/all', '').subscribe((res) => {
      this.products = res;
      this.loading = false;
    },(error) => {
      this.loading = error;
    })
  }

  openEditProduct(index: number){
    this.selectedProduct = {...this.products[index]};
    $('#editProductModal').modal({
      backdrop: 'static',
      keyboard: false
    });;
  }

  editProduct(){
    this.loadingEdit = true;
    this.request.post('products/product-coupon/' + this.selectedProduct.id, this.selectedProduct).subscribe((res: any) => {
      this.loadingEdit = false;
      $('#editProductModal').modal('hide');
      this.notify.notification.next({type: 'success', title: '', content: res.detail })
      this.getProducts();
    },(error) => {
      this.loadingEdit = false;
      this.notify.notification.next({type: 'danger', title: '', content: error })
    });
  }

  deleteProduct(index: number){
    const product = this.products[index]
    this.request.post('products/delete-product/' + product.id, '').subscribe((res: any) => {
      this.getProducts();
      this.notify.notification.next({type: 'success', title: '', content: res.detail })
    },(error) => {
      this.notify.notification.next({type: 'danger', title: '', content: error })
    });
  }

  switchTableEvent(event: any){
    const index = event.index;
    const action = event.action;
    if (action === 'edit'){
      this.openEditProduct(index);
    }else if (action === 'delete'){
      this.deleteProduct(index);
    }
  }

}
