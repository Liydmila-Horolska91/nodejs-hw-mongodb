import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DB_URI = process.env.MONGODB_URI;

console.log('Loaded MongoDB URI:', DB_URI);  // Перевірка URI в консолі

const initMongoConnection = async () => {
  try {
    if (!DB_URI) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(DB_URI);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);  // Завершення процесу з помилкою
  }
};

export default initMongoConnection;
