import mongoose from 'mongoose';

export async function connectDb() {
  try {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('Database connected successfully');
    });
    connection.on('error', err => {
      console.error('Database connection error:', err);
      process.exit();
    });
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}
