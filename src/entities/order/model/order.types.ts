export type OrderAuthorType = "executor" | "company" | "customer";

export interface OrderAuthor {
  name: string;
  type: OrderAuthorType;
}

export interface Order {
  id: string;
  title: string;
  description: string;
  rating: number;
  author: OrderAuthor;
  region: string;
  price: number;
  keywords: string[];
  createdAt: string;
}
