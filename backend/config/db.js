import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`📡 MongoDB Cluster Link Secure: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Data Cluster Ingestion Failure: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;