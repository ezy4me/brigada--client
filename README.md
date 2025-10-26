# Brigada Client

Фронтенд часть проекта Brigada на Next.js с использованием FSD-структуры.

## Стек

- **Frontend:** Next.js 16, React 19
- **Стили:** TailwindCSS 3.3, shadcn/ui, tailwind-merge
- **Состояние:** Zustand
- **Запросы:** React Query
- **UI:** shadcn компоненты (Button, Card, Dialog, Input)
- **Типизация:** TypeScript 5
- **Инструменты:** ESLint, Prettier, PostCSS, Tailwind Animate

## Структура проекта

```

src/
├─ app/
├─ entities/
├─ features/
├─ processes/
├─ shared/
└─ widgets/

````

> Полная структура FSD с разделением на app, entities, features, shared и widgets.

## Установка

```bash
npm install
````

## Запуск

```bash
npm run dev
```

## TailwindCSS

Tailwind подключен через `globals.css` и готов к использованию в `shared/ui` и страницах приложения.

## Компоненты shadcn

* Кнопки, карточки, диалоги и инпуты вынесены в `src/shared/ui`.


