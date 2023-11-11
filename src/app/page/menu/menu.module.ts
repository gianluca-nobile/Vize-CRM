import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class MenuModule { }
