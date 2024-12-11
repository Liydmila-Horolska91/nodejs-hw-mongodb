// import mongoose from "mongoose";

// const initMongoConnection = async () => {
//   try {
//     if (!process.env.DB_URI) {
//       throw new Error("DB_URI is not defined in the .env file");
//     }

//     await mongoose.connect(process.env.DB_URI); // Видалено застарілі опції
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Database connection error:", error.message);
//     process.exit(1); // Завершити процес у разі помилки
//   }
// };

// export default initMongoConnection;


import mongoose from "mongoose";

const DB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

export async function initMongoConnection() {
  await mongoose.connect(DB_URI);
  console.log("Mongo connection successfully established!");
}
