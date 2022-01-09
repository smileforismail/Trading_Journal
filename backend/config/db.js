import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// function that make connection to mongodb

const dbConnection = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB);
		console.log(`MongoDb Connection: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error connection to db: ${error}`);
	}
};

export default dbConnection;
