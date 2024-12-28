import cloudinary from 'cloudinary';
import fs from 'node:fs/promises';
import dotenv from 'dotenv';

// Завантаження змінних оточення з файлу .env
dotenv.config();

// Перевірка наявності конфігурації Cloudinary
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Cloudinary configuration is missing');
}

// Налаштування Cloudinary
cloudinary.v2.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Функція для видалення файлу
const deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.error(
      `Failed to delete file: ${filePath}, error: ${error.message}`,
    );
  }
};

// Функція для збереження файлу в Cloudinary
export const saveFileToCloudinary = async (file, folder = 'uploads') => {
  if (!file || !file.path) {
    throw new Error('File is not provided or invalid');
  }

  try {
    const response = await cloudinary.v2.uploader.upload(file.path, { folder });
    console.log('Cloudinary upload response:', response); // Для дебагінгу
    await deleteFile(file.path);
    return response.secure_url;
  } catch (error) {
    throw new Error(`Failed to upload file to Cloudinary: ${error.message}`);
  }
};
