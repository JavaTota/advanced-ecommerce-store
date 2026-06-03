import type { Product } from "../types/product";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
};

export const getCategories = async (): Promise<string[]> => {
    const response = await fetch(`${BASE_URL}/products/categories`);

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return response.json();
};

export const getProductsByCategory = async (
    category: string
): Promise<Product[]> => {
    const response = await fetch(
        `${BASE_URL}/products/category/${category}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch category products");
    }

    return response.json();
};