import { OrderLine } from './orderline.model';

export interface Order {
    orderId: number;
    orderLines: Array<OrderLine>;
}
