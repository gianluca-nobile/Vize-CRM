import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import { NavbarComponent } from './navbar/navbar.component';
import { CouponComponent } from './coupon/coupon.component';
import { UserListComponent } from './user-list/user-list.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CouponComponent,
    UserListComponent,
    AnalyticsComponent,
    ProductComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        FormsModule,
        TranslateModule
    ]
})
export class DashboardModule { }
