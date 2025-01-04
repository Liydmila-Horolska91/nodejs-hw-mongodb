import createHttpError from 'http-errors';
import swaggerUI from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
console.log("swggerua", swaggerUI);

export const swaggerDocs = () => {
  try {
    // Шлях до файлу swagger.json
    const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');

    // Перевірка наявності файлу
    if (!fs.existsSync(SWAGGER_PATH)) {
      throw new Error(`File not found: ${SWAGGER_PATH}`);
    }

    // Читання та парсинг файлу
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf-8'));

    // Повернення middleware для Swagger UI
    return [swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    // Обробка помилок
    console.error('Error loading Swagger docs:', err.message);
    return (req, res, next) =>
      next(createHttpError(500, "Can't load swagger docs"));
  }
};
