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


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CouponComponent,
    UserListComponent,
    AnalyticsComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class DashboardModule { }
