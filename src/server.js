import express from "express";
import pino from "pino-http";
import cors from "cors";
import router from "./routers/contacts.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import initMongoConnection from "./db/initMongoConnection.js";

export async function setupServer() {
  const app = express();

  // Підключення до MongoDB
  await initMongoConnection();

  app.use(cors());
  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.use("/contacts", router);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
