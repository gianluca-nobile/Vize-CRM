import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { TableComponent } from './table/table.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoadingComponent } from './loading/loading.component';
import {NotificationInfoComponent} from "./notification-info/notification-info.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
        SharedComponent,
        TableComponent,
        TopBarComponent,
        LoadingComponent,
        NotificationInfoComponent
    ],
    exports: [
        TableComponent,
        TopBarComponent,
        LoadingComponent,
        NotificationInfoComponent
    ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
