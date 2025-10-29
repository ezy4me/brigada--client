
# Brigada Client

Фронтенд часть проекта Brigada на Next.js с использованием архитектуры FSD.

## Стек

- **Frontend:** Next.js 16 (с Webpack), React 19
- **Стили:** Vanilla Extract (CSS-in-JS на этапе сборки), `@vanilla-extract/recipes`
- **UI:** Radix UI (unstyled, доступные компоненты), кастомные UI-компоненты
- **Анимации:** Framer Motion
- **Состояние:** Zustand
- **Запросы:** TanStack Query (React Query)
- **Типизация:** TypeScript 5
- **Инструменты:** ESLint, Prettier

## Архитектура

Проект следует архитектуре **Feature-Sliced Design (FSD)**:

- `app` — точка входа, layout, провайдеры.
- `entities` — бизнес-сущности (User, Order, и т.д.).
- `features` — фичи приложения (Auth, CreateOrder, и т.д.).
- `shared` — переиспользуемые слои (ui, lib, config, types).
- `widgets` — виджеты страницы (Header, Footer, Hero).
- `processes` — сквозные сценарии (Auth Flow).

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

## Стилизация

- Используется **Vanilla Extract** для стилизации компонентов.
- Дизайн-система построена на основе **дизайн-токенов** (`vars`), интегрированных с темой.
- Для анимаций используется **Framer Motion**.

## UI-компоненты

- Кастомные компоненты (`Button`, `Input`, `Textarea`, `Dropdown`, `RoleSelector`, `BackgroundLines`) реализованы с использованием **Radix UI** и **Vanilla Extract**.
- Компоненты находятся в `src/shared/ui`.
