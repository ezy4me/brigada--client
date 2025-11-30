import { Order } from "../types/order.types";
import { UserRole } from "../types/user.types";

export const mockOrders: Order[] = [
  {
    id: "1",
    title: "Ремонт кухни под ключ",
    description:
      "Нужен мастер для ремонта кухни под ключ. Работы по электрике, сантехнике, отделке.",
    rating: 4.8,
    author: { name: "ИП Иванов И.И.", type: "executor" },
    region: "Казань",
    price: 25000,
    keywords: ["ремонт", "кухня", "электрика", "сантехника"],
    createdAt: "2025-02-01",
    orderType: "service",
  },
  {
    id: "2",
    title: "Требуется электрик для замены проводки",
    description: "Нужен опытный электрик для замены старой проводки в 2-к квартире.",
    rating: 4.9,
    author: { name: "Анна С.", type: "customer" },
    region: "Москва",
    price: 15000,
    keywords: ["электрика", "проводка", "квартира"],
    createdAt: "2025-02-02",
    orderType: "job",
  },
  {
    id: "3",
    title: "Строительство коттеджа 150м²",
    description: "Ищем подрядчика для строительства коттеджа под ключ.",
    rating: 4.7,
    author: { name: "СтройГарант ООО", type: "company" },
    region: "Санкт-Петербург",
    price: 500000,
    keywords: ["строительство", "коттедж", "под ключ"],
    createdAt: "2025-02-03",
    orderType: "job",
  },
  {
    id: "4",
    title: "Укладка плитки в ванной",
    description: "Ищу исполнителя для укладки керамической плитки в ванной комнате 8м².",
    rating: 4.6,
    author: { name: "Мария К.", type: "customer" },
    region: "Казань",
    price: 8000,
    keywords: ["плитка", "ванная", "отделка"],
    createdAt: "2025-02-04",
    orderType: "job",
  },
  {
    id: "5",
    title: "Отделка офиса",
    description: "Комплексная отделка офисного помещения 60м².",
    rating: 4.8,
    author: { name: "ОтделочникПро", type: "company" },
    region: "Москва",
    price: 120000,
    keywords: ["отделка", "офис", "ремонт"],
    createdAt: "2025-02-05",
    orderType: "service",
  },
  {
    id: "6",
    title: "Установка натяжных потолков",
    description: "Профессиональная установка натяжных потолков в квартире.",
    rating: 4.9,
    author: { name: "Петр В.", type: "executor" },
    region: "Санкт-Петербург",
    price: 20000,
    keywords: ["потолки", "натяжные", "монтаж"],
    createdAt: "2025-02-06",
    orderType: "service",
  },
];

export const getMockOrders = (role: UserRole): Order[] => {
  switch (role) {
    case "executor":
      return mockOrders.filter(
        (order) => order.author.type === "customer" && order.orderType === "job"
      );

    case "customer":
      return mockOrders.filter(
        (order) =>
          (order.author.type === "executor" || order.author.type === "company") &&
          order.orderType === "service"
      );

    case "company":
      return mockOrders.filter(
        (order) =>
          order.author.type === "customer" ||
          (order.author.type === "executor" && order.orderType === "service")
      );

    case "guest":
      return mockOrders.slice(0, 3);

    default:
      return mockOrders;
  }
};
