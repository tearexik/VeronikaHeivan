# Paws Store

## Features

-   Головна сторінка зі списком товарів
-   Адмін панель для додавання товару, типу товару та бренду
-   Аунтифікація та реєстрація користувача
-   Обзор товару с можливістю додавання його в корзину
-   Можливість очищення корзини

## Usage

### Створіть файл .env з наступною інформацією

```
PORT=5000
DB_NAME= name of database
DB_USER= name of user
DB_PASSWORD= user password
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY= random key
```

### Встановіть усі залежності

```
cd server
npm install
cd client
npm install
```
### Налаштуйте базу даних
Використовуйте PostgreSQL.
Створіть базу даних та з'єднайте її з проектом у файлі server/db.js.

### Запуск проекту

```
cd server
npm run dev
cd client
npm start
```
Перейдіть за посиланням http://localhost:3000 та перегляньте додаток у браузері.
