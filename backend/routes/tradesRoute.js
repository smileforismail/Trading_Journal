import express from "express";
const router = express.Router();
import cors from "cors";
import bodyParser from "body-parser";
// connection to db
// import dbConnection from "../config/db.js";
// import model
import tradeModel from "../models/tradeModel.js";

// establish connection with mongoDB
// dbConnection();

router.use(cors({ origin: "http://localhost:3000" }));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// @desc Insert trade into db
// @route POST api/trades/create
// @access Public
router.post("/create", async (req, res) => {
	// deconstruct object
	const { accountBalance, date, currencyPair, type, profit, chartImage, comment } = req.body;

	// calculate return %
	const precentageReturn = ((profit / accountBalance) * 100).toFixed(2);

	// make a document from model and send it to mongoDB
	const newTradeDoc = new tradeModel({
		date,
		accountBalance,
		type,
		currencyPair,
		profit,
		return: precentageReturn,
		chartImage,
		comment,
	});

	// send to db
	try {
		await tradeModel.insertMany(newTradeDoc);
		console.log(`\nSuccessfully added to database\n`);
	} catch (error) {
		console.log(`\nError inserting to db: ${error}\n`);
	}
});

// @desc Fetch trades from db
// @route POST api/trades/
// @access Public
router.get("/", async (req, res) => {
	try {
		const trades = await tradeModel.find();
		res.json(trades);
	} catch (error) {
		console.log("\nError getting data from DB");
	}
});

// @desc Fetch single trade doc from db
// @route POST api/trades/:id
// @access Public
router.get("/:id", async (req, res) => {
	const id = req.params.id;

	const tradeDoc = await tradeModel.findById(id);

	if (tradeDoc) {
		res.json(tradeDoc);
	} else {
		res.status(404).json({ message: "tradeDoc not found" });
	}
});

export default router;
