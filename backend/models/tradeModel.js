import mongoose from "mongoose";

// make schema for db
const tradeSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	accountBalance: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	currencyPair: {
		type: String,
		required: true,
	},
	profit: {
		type: Number,
		required: true,
	},
	return: {
		type: Number,
		required: true,
	},
	chartImage: {
		type: String,
	},
	comment: {
		type: String,
		required: true,
	},
});

// make model for db
const Trade = new mongoose.model("Trade", tradeSchema);

export default Trade;
