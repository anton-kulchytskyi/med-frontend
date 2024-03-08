interface OrderItem {
  id: string;
  quantity: number;
  _id: string;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
}
