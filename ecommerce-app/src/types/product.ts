export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Order {
    id: string;
    userId: string;
    products: CartItem[];
    totalItems: number;
    totalPrice: number;
    createdAt: Date;
}