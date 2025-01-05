import mongoose from "mongoose";


const DB_URI = `mongodb+srv://Ludmila:1991LudaHo@cluster0.ripq7.mongodb.net/stage?retryWrites=true&w=majority`;

async function initMongoConnection() {
  try {
    await mongoose.connect(DB_URI);
    console.log("Mongo connection successfully established!");
  } catch (error) {
    console.error("Mongo connection failed:", error.message);
  }
}


export default initMongoConnection;
