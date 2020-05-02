import { OrderLine } from './orderline.model';

export interface ShoppingCart {
    items: Array<OrderLine>;
}
