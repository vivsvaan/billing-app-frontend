import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/app.interfaces';
import { Utils } from 'src/app/_helpers';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
    ordersData: Order[];

    displayedColumns = ['order_id', 'order_status', 'customer_name', 'items'];

    constructor(private ordersService: OrdersService) {}

    ngOnInit(): void {
        this.fetchOrdersList();
    }

    fetchOrdersList() {
        const shopId = Utils.storageHelper.shopId;
        this.ordersService.fetchOrders(shopId).subscribe((res: Order[]) => {
            this.ordersData = res;
        });
    }
}
