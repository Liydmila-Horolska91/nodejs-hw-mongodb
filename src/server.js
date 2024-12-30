import express from 'express';
import cors from 'cors';
import pino from 'pino';
import router from './routers/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constans/index.js';

const logger = pino();
const app = express();

// Налаштування middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(UPLOAD_DIR));

// Логування запитів
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Використання маршруту
app.use(router);

// Обробка 404 помилок
app.use(notFoundHandler);

// Обробка загальних помилок
app.use(errorHandler);

// Функція для налаштування сервера
const setupServer = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default setupServer; 
