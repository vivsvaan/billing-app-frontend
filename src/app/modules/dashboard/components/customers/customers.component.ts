import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/app.interfaces';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
    customersData: Customer[] = [
        {
            customer_id: 1,
            customer_name: 'saksam',
            customer_email: 'sak@sam.saksam',
            customer_mobile: '69696969',
            customer_address: 'saksam 69',
        },
    ];

    displayedColumns = ['customer_id', 'customer_name'];

    constructor() {}

    ngOnInit(): void {}
}
