import React, { useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// use axios to make requests to backend
import axios from "axios";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";

const NewEntryScreen = () => {
	// state for toast component
	const [showToast, setShowToast] = useState(false);
	// set when toggle is called
	const toggleShowToast = () => setShowToast(!showToast);

	const [tradeData, setTradeData] = useState({
		date: "",
		accountBalance: "",
		currencyPair: "",
		type: "",
		profit: "",
		comment: "",
	});

	// when data is entered into formControls
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		// set key field in object with value
		setTradeData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	// when button is clicked
	const handleClick = (event) => {
		event.preventDefault();

		// check if all keys have a value
		let thumbsUp = false;
		const sendData = async () => {
			for (var key in tradeData) {
				if (tradeData[key] === "") {
					thumbsUp = false;
					break;
				} else {
					thumbsUp = true;
				}
			}
			// send data to backend if object keys have values
			if (thumbsUp) {
				await axios.post("http://localhost:4000/api/trades/create", tradeData);
			} else {
				console.log("nope");
				// set when toggle is called
				setShowToast(!showToast);
			}
		};
		sendData();

		// clear form after sending data
		setTradeData({
			date: "",
			accountBalance: "",
			currencyPair: "",
			type: "",
			profit: "",
			return: "",
			comment: "",
		});
	};

	return (
		<Container>
			<Row className="justify-content-center">
				<Col className="col-lg-8 col-md-10">
					{/* Back button */}
					<Link to={"/"}>
						<Button type="button" className="btn btn-dark btn-lg rounded-0 mt-4">
							Back
						</Button>
					</Link>

					<h1 className="text-center mt-3">Enter New Trade</h1>

					{/* Input Table */}
					<Card className="mt-3 rounded-0">
						<Card.Body>
							<Form>
								{/* account balance */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Account Balance:</Form.Label>

											<Form.Control
												onChange={handleChange}
												type="number"
												placeholder="$0.00"
												name="accountBalance"
												value={tradeData.accountBalance}
											/>
										</Col>
									</Row>
								</Form.Group>
								{/* Date */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Date:</Form.Label>

											<Form.Control
												onChange={handleChange}
												type="date"
												name="date"
												value={tradeData.date}
											/>
										</Col>
									</Row>
								</Form.Group>
								{/* Currency pair */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Pair:</Form.Label>

											<Form.Select
												onChange={handleChange}
												name="currencyPair"
												value={tradeData.currencyPair}
											>
												<option></option>
												<option>AUD/USD</option>
												<option>GBP/USD</option>
												<option>EUR/USD</option>
												<option>USD/CAD</option>
											</Form.Select>
										</Col>
									</Row>
								</Form.Group>
								{/* Type */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Type:</Form.Label>

											<Form.Select onChange={handleChange} name="type" value={tradeData.type}>
												<option></option>
												<option>Long</option>
												<option>Short</option>
											</Form.Select>
										</Col>
									</Row>
								</Form.Group>
								{/* Profit */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Profit:</Form.Label>
											<Form.Control
												onChange={handleChange}
												type="number"
												placeholder="$0.00"
												name="profit"
												value={tradeData.profit}
											/>
										</Col>
									</Row>
								</Form.Group>
								{/* Comment */}
								<Form.Group className="mb-4">
									<Row>
										<Col>
											<Form.Label>Comment:</Form.Label>
											<Form.Control
												onChange={handleChange}
												as={"textarea"}
												rows="3"
												placeholder="reason for entry..."
												name="comment"
												value={tradeData.comment}
											/>
										</Col>
									</Row>
								</Form.Group>
								<div class="d-grid gap-2">
									<Button class="btn btn-primary" type="submit" onClick={handleClick}>
										Add Entry
									</Button>
								</div>

								{/* toast that appears when button is clicked */}

								<div class="position-absolute top-50 start-50 translate-middle">
									<Toast show={showToast} onClose={toggleShowToast}>
										<Toast.Header className="text-warning bg-dark">
											<strong className="me-auto">Error</strong>
											<small>Now</small>
										</Toast.Header>
										<Toast.Body className="text-center text-warning">Fill in all Fields</Toast.Body>
									</Toast>
								</div>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default NewEntryScreen;
