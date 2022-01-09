import express from "express";
import dotenv from "dotenv";
// file to connect to db
import dbConnection from "./config/db.js";

// set-up express and dotenv
dotenv.config();
const app = express();

// connect to db
dbConnection();

// set-up routes
app.get("/", (req, res) => {
	res.send("Api working!");
});

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
