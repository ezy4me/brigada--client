export type UserRole = "customer" | "executor" | "company";

export type OrderAuthorType = "customer" | "executor" | "company";

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
  orderType: "service" | "job";
}

export interface FilterValues {
  minPrice: string;
  maxPrice: string;
  region: string;
  keywords: string;
  executorType?: "company" | "executor";
  highRatingOnly: boolean;
  contentType?: "jobs" | "services";
}