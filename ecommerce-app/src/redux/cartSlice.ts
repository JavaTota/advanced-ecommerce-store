import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product, CartItem } from "../types/product";

interface CartState {
    cartItems: CartItem[];
}

const savedCart = sessionStorage.getItem("cart");

const initialState: CartState = {
    cartItems: savedCart ? JSON.parse(savedCart) : [],
};

const saveCartToSessionStorage = (cartItems: CartItem[]) => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }

            saveCartToSessionStorage(state.cartItems);
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );

            saveCartToSessionStorage(state.cartItems);
        },

        clearCart: (state) => {
            state.cartItems = [];
            sessionStorage.removeItem("cart");
        },

        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find((item) => item.id === action.payload);

            if (item) {
                item.quantity += 1;
            }

            saveCartToSessionStorage(state.cartItems);
        },

        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find((item) => item.id === action.payload);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload
                );
            }

            saveCartToSessionStorage(state.cartItems);
        },
    },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;