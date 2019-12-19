import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ClrCheckboxModule, ClrInputModule, ClrPasswordModule, ClrSelectModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ClrSelectModule,
        ClrInputModule,
        ClrPasswordModule,
        ClrCheckboxModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
