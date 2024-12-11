import mongoose from "mongoose";

const initMongoConnection = async () => {
  try {
    if (!process.env.DB_URI) {
      throw new Error("DB_URI is not defined in the .env file");
    }

    await mongoose.connect(process.env.DB_URI); // Видалено застарілі опції
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Завершити процес у разі помилки
  }
};

export default initMongoConnection;
