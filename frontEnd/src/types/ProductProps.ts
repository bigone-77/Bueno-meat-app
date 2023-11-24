export interface ProductProps {
    id?: number;
    category?: string;
    title: string;
    weightCount?: number;
    weightUnit?: string;
    description?: string;
    price: number;
    imageURL: string;
}