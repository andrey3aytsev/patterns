# Паттерны проектирования на TypeScript

Учебный проект с примерами классических паттернов ООП.

Все паттерны работают с одной предметной областью — UI-компонентами из `src/patterns/models/`, поэтому их удобно сравнивать между собой.

## Структура

```
src/
├── index.ts                # точка входа: запуск демки по имени паттерна
└── patterns/
    ├── models/             # общие модели для всех паттернов
    ├── abstract-factory/
    ├── factory-method/
    ├── builder/
    ├── prototype/
    ├── singleton/
    ├── adapter/
    ├── bridge/
    └── composite/
```

Каждая директория паттерна содержит два файла: `<pattern>.ts` — реализация паттерна, и `index.ts` — небольшая демка.

## Запуск

```bash
npm install
npm start               # список доступных паттернов
npm start -- composite
```

## Паттерны

### Порождающие

- **Abstract Factory** — `WindowsFactory` / `MacFactory` создают согласованные `IButton`, `ILink`, `ITextField`; клиент `Application` работает через интерфейс `IGuiFactory`.
- **Factory Method** — `Dialog` задаёт шаблон, наследники (`WindowsDialog`, `MacDialog`) решают, какую кнопку создать.
- **Builder** — пошаговая сборка `Form` через `WindowsFormBuilder` / `MacFormBuilder` и `FormDirector` с типовым сценарием.
- **Prototype** — cloneable-обёртки над моделями + `UIComponentPrototypeRegistry`, создающий объекты клонированием по ключу.
- **Singleton** — `UIThemeManager` с приватным конструктором и `getInstance()` хранит единственный экземпляр темы.

### Структурные

- **Adapter** — `ButtonAdapter` приводит `LegacyButton` (`display` / `handleClick`) к интерфейсу `IButton`.
- **Bridge** — разделение абстракции (`Button`, `LoadableButton`, `IconButton`) и реализации (`WindowsButtonImplementor`, `MacButtonImplementor`, `LinuxButtonImplementor`).
- **Composite** — `Panel` хранит дочерние `IUIComponent` (кнопки, ссылки или другие панели); клиент одинаково работает и с элементом, и с деревом.
