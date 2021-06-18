/** 
##################################################
#################### USER ########################
##################################################
*/
export interface UserInfo {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    access_token?: string;
    refresh_token?: string;
    access_token_expiry?: string;
}

/** 
##################################################
#################### AUTH ########################
##################################################
*/

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    access_token?: string;
    refresh_token?: string;
    access_token_expiry?: string;
}

/** 
##################################################
#################### CUSTOMERS ###################
##################################################
*/

export interface Customer {
    customer_id: number;
    customer_name: string;
    customer_address: string;
    customer_email: string;
    customer_mobile: string;
}

/** 
##################################################
#################### RESTAURANTS #################
##################################################
*/

export interface Restaurant {
    name: string;
}

/** 
##################################################
#################### ITEMS #######################
##################################################
*/

export interface Item {
    item_id: number;
    item_name: string;
    item_description: string;
    item_ingredients: string;
    item_recipe: string;
    item_price: number;
}

export interface BillItem {
    item: Item;
    itemPrice: number;
    quantity: number;
}

/** 
##################################################
#################### ORDERS ######################
##################################################
*/

export interface Order {
    completed: boolean;
    customer: Customer;
    restaurant: Restaurant;
    billItems: BillItem[];
    billAmount: number;
    discount: number;
}
