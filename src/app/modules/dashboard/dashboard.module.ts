import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { ItemsComponent } from './components/items/items.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        DashboardComponent,
        OrdersComponent,
        CustomersComponent,
        NewOrderComponent,
        ItemsComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatTabsModule,
        MatTableModule,
    ],
})
export class DashboardModule {}
