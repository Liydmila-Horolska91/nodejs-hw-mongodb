import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

export async function initMongoConnection() {
  await mongoose.connect(DB_URI);
  console.log("Mongo connection successfully established!");
}
