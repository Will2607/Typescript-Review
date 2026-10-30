export type OrderSummary = {
  orderId: string;
  total: number;
};

export const TAX_RATE = 0.1;

export default function summarizeOrder(order: OrderSummary): string {
  return order.orderId + ":" + String(order.total);
}
