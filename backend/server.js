import express from "express";
import "colors";
// file to connect to db
import connectToDatabase from "./config/db.js";

// set-up express
const app = express();

// connect to db
connectToDatabase();

// set-up routes
app.get("/", (req, res) => {
	res.send("Api working at home");
});

app.listen(4000, () => {
	console.log("Server running on port 4000 in development mode".green.inverse);
});
