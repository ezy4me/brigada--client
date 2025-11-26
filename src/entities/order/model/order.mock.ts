import { Order } from "./order.types";

export const mockOrders: Order[] = [
  {
    id: "1",
    title: "Ремонт кухни",
    description: "Нужен мастер для ремонта кухни под ключ. Работы по электрике, сантехнике, отделке.",
    rating: 4.8,
    author: {
      name: "ИП Иванов И.И.",
      type: "executor",
    },
    region: "Казань",
    price: 25000,
    keywords: ["ремонт", "кухня", "электрика", "сантехника"],
    createdAt: "2025-02-01",
  },
  {
    id: "2",
    title: "Замена электропроводки",
    description: "Требуется опытный электрик для замены старой проводки в 2-к квартире.",
    rating: 4.9,
    author: {
      name: "СтройКорпус ООО",
      type: "company",
    },
    region: "Москва",
    price: 15000,
    keywords: ["электрика", "проводка", "квартира"],
    createdAt: "2025-02-02",
  },
  {
    id: "3",
    title: "Укладка плитки в ванной",
    description: "Ищу исполнителя для укладки керамической плитки в ванной комнате.",
    rating: 4.6,
    author: {
      name: "Анна С.",
      type: "customer",
    },
    region: "Санкт-Петербург",
    price: 8000,
    keywords: ["плитка", "ванная", "отделка"],
    createdAt: "2025-02-03",
  },
];