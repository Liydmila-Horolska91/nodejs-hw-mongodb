// import express from 'express';
// import cors from 'cors';
// import pino from 'pino';
// import router from './routers/index.js';
// import { notFoundHandler } from './middlewares/notFoundHandler.js';
// import { errorHandler } from './middlewares/errorHandler.js';
// import cookieParser from 'cookie-parser';
// import { UPLOAD_DIR } from './constans/index.js';

// const logger = pino();
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());
// app.use('/uploads', express.static(UPLOAD_DIR));

// app.use((req, res, next) => {
//   logger.info(`${req.method} ${req.url}`);
//   next();
// });

// app.use(router);

// app.use(notFoundHandler);

// app.use(errorHandler);

// const setupServer = () => {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };

// export default setupServer;


import express from 'express';
import cors from 'cors';
import pino from 'pino';
import router from './routers/index.js'; // Переконайтеся, що цей файл існує
import { notFoundHandler } from './middlewares/notFoundHandler.js'; // Переконайтеся, що цей файл існує
import { errorHandler } from './middlewares/errorHandler.js'; // Переконайтеся, що цей файл існує
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constans/index.js'; // Переконайтеся, що цей файл існує

const logger = pino(); // Ініціалізація логера
const app = express(); // Створення екземпляра Express

// Налаштування middleware
app.use(cors()); // Дозволити CORS
app.use(express.json()); // Парсити JSON
app.use(cookieParser()); // Парсити куки
app.use('/uploads', express.static(UPLOAD_DIR)); // Статичні файли для завантажень

// Логування запитів
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`); // Логування методу та URL запиту
  next(); // Перехід до наступного middleware
});

// Використання маршруту
app.use(router); // Підключення основних маршрутів

// Обробка 404 помилок
app.use(notFoundHandler); // Обробник для не знайдених маршрутів

// Обробка загальних помилок
app.use(errorHandler); // Обробник для загальних помилок

// Функція для налаштування сервера
const setupServer = () => {
  const PORT = process.env.PORT || 3000; // Визначення порту
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Логування порту, на якому працює сервер
  });
};

export default setupServer; // Експорт функції налаштування сервера
