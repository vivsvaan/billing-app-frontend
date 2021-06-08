export interface User {
    name: string;
}

export interface Customer {
    customer_id: number;
    customer_name: string;
    customer_address: string;
    customer_email: string;
    customer_mobile: string;
}

export interface Item {
    item_id: number;
    item_name: string;
    item_description: string;
    item_ingredients: string;
    item_recipe: string;
    item_price: number;
}

export interface Order {
    order_id: number;
    order_status: string;
    customer: Customer;
    items: Item[];
}
