// file to connect to db
import connectToDatabase from "./config/db.js";
// import model
import tradeModel from "./models/tradeModel.js";
// import sample data
import trades from "./trades.js";

// connect to db using connection file
connectToDatabase();

// function to insert data
const importData = async () => {
	try {
		await tradeModel.insertMany(trades);
		console.log(`\nSuccessfully added to database\n`);
	} catch (error) {
		console.log(`\nError inserting to db: ${error}\n`);
	}
};

// function to delete data
const deleteData = async () => {
	try {
		await tradeModel.deleteMany();
		console.log(`\nSuccessfully deleted from database\n`);
	} catch (error) {
		console.log(`\nError inserting to db: ${error}\n`);
	}
};

if (process.argv[2] === "-D") {
	// console.log("Nah Chief!\nNo deleing data right now");
	deleteData();
} else {
	// console.log("Yes Chief!\n");
	importData();
}
