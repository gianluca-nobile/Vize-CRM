import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {UserListComponent} from "./user-list/user-list.component";
import {CouponComponent} from "./coupon/coupon.component";

const routes: Routes = [{ path: '', component: DashboardComponent, children: [
    { path: 'user-list', component: UserListComponent},
    { path: 'coupon', component: CouponComponent},
    { path: '**', redirectTo: 'user-list'}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
