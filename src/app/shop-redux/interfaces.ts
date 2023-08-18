export interface IProduct {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

export interface ICart {
    products: IProduct[],
    error: string | null
}

export interface AppStateInterface {
    products: ICart;
}