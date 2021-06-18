export interface LoginRequest {
    username: string;
    password: string;
}

export interface RegistrationRequest {
    username: string;
    email?: string;
    password: string;
}

export interface UserResponse {
    _id: string
    username: string;
    email?: string;
    createdAt: Date,
    updatedAt: Date
}

export interface LoginResponse {
    user: UserResponse;
    token: string;
    tokenType: string
}

export interface RegistrationResponse {
    user: UserResponse;
    token: string;
    tokenType: string
}

export interface ShopRequest {
    name: string;
    address?: string;
    email?: string;
    mobile: number;
    user: string;
}

export interface ShopResponse {
    _id: string;
    name: string;
    address?: string;
    email?: string;
    mobile: number;
    user: UserResponse;
    createdAt: Date;
    updatedAt: Date;
}

export interface CustomerRequest {
    name: string;
    address?: string;
    email?: string;
    mobile: string; 
}

export interface CustomerResponse {
    _id: string
    name: string;
    address?: string;
    email?: string;
    mobile: string;
    shop: ShopResponse;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ItemRequest {
    name: string;
    description?: string;
    ingredients?: string;
    recipe?: string;
    price: number;
}

export interface ItemResponse {
    _id: number;
    name: string;
    description?: string;
    ingredients?: string;
    recipe?: string;
    price: number;
    shop: ShopResponse;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface BillItemRequest {
    item: string;
    itemPrice: number;
    quantity: number;
}

export interface OrderRequest {
    customer: string;
    billItems: BillItemRequest[];
    billAmount: number;
    discount?: number;
}

export interface BillItemResponse {
    _id: string;
    item: ItemResponse;
    itemPrice: number;
    quantity: number;
}

export interface OrderResponse {
    _id: string;
    completed: boolean;
    customer: CustomerResponse;
    billItems: BillItemResponse[];
    billAmount: number;
    discount?: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ReceiptResponse {
    _id: string;
    order: string;
    customer: CustomerResponse;
    billItems: BillItemResponse[];
    billAmount: number;
    discount?: number;
    createdAt: Date;
    updatedAt: Date;
}

// No ReceiptRequest model as receipt will be generated based on the order data hence the orderResponse object can be used to generate receipt


