import { UserRole } from '@/shared/lib/types/user.types';
import { HeroFinderConfig } from './types';

export const getHeroFinderConfig = (role: UserRole): HeroFinderConfig => {
  const baseConfig = {
    executor: {
      title: "Найти заказы",
      placeholder: "Что нужно сделать?",
      searchLabel: "Найти заказы",
      popularRequests: [
        "ремонт кухни",
        "замена электрики", 
        "натяжные потолки",
        "укладка плитки",
        "монтаж водопровода"
      ],
      stats: ["Более 1000 заказов", "Без комиссии"]
    },
    customer: {
      title: "Найти исполнителя",
      placeholder: "Кого ищете?",
      searchLabel: "Найти исполнителей", 
      popularRequests: [
        "найти плотника",
        "найти электрика",
        "найти сантехника",
        "найти отделочника", 
        "найти строителя"
      ],
      stats: ["Более 500 исполнителей", "Без комиссии"]
    },
    company: {
      title: "Найти проекты",
      placeholder: "Какой проект ищете?",
      searchLabel: "Найти проекты",
      popularRequests: [
        "строительство коттеджа",
        "отделка офиса", 
        "ремонт магазина",
        "проектирование",
        "технический надзор"
      ],
      stats: ["Крупные проекты", "Прямые заказчики"]
    },
    guest: {
      title: "Найти услуги",
      placeholder: "Что вас интересует?",
      searchLabel: "Найти",
      popularRequests: [
        "ремонт",
        "отделка",
        "строительство",
        "электрика",
        "сантехника"
      ],
      stats: ["Тысячи исполнителей", "Все виды работ"]
    }
  };

  return baseConfig[role];
};