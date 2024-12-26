import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

console.log('Loaded MongoDB URI:', DB_URI);

const initMongoConnection = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

export default initMongoConnection;
