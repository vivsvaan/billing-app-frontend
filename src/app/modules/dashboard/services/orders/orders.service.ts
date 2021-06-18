import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { applicationUrls } from 'src/app/_helpers/urls';

@Injectable({
    providedIn: 'root',
})
export class OrdersService {
    constructor(private http: HttpClient) {}

    fetchOrders(shopId: number) {
        const url = applicationUrls.ordersListUrl + shopId;
        return this.http.get(url);
    }
}
