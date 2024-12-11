import mongoose from "mongoose";

const DB_URI = `mongodb+srv://<db_username>:<db_password>@cluster0.ripq7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export async function initMongoConnection() {
  await mongoose.connect(DB_URI);
  console.log("Mongo connection successfully established!");
}
