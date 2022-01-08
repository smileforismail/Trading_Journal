import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";

// set-up dotenv
dotenv.config();

// connect to mongoDB
connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB);
		console.log("\nSuccessfully connected to mongoDB\n".green.bold);
	} catch (error) {
		console.log("\nError connecting to mongoDB\n".red.bold);
	}
};

export default connectToDatabase;
