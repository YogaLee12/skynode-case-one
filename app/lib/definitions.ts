
export type Category = {
    id: string;
    name: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    category_id: string;
};

export type ProductVariant = {
    id: string;
    product_id: string;
    name: string;
    price: number;
};

export type ProductWithDetails = Product & {
    category: Category;
    variants: ProductVariant[];
};