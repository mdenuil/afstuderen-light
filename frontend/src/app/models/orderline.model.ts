import { Product } from './product.model';

export interface OrderLine {
    amount: number;
    product: Product;
}
