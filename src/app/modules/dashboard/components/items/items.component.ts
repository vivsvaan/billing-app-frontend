import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/app.interfaces';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
    itemsData: Item[];

    displayedColumns = ['item_id', 'item_name'];

    constructor() {}

    ngOnInit(): void {}
}
