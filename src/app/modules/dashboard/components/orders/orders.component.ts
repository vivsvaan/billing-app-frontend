import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/app.interfaces';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
    ordersData: Order[];

    displayedColumns = ['order_id', 'order_status', 'customer_name', 'items'];

    constructor() {}

    ngOnInit(): void {}
}
