import React, { useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const NewEntryScreen = () => {
	const [tradeData, setTradeData] = useState({
		date: "",
		accountBalance: "",
		currencyPair: "",
		type: "",
		profit: "",
		return: "",
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
		// event.preventDefault();

		console.log(tradeData);
	};

	return (
		<Container>
			<Row className="justify-content-center">
				<Col className="col-8">
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
												required={true}
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
												required={true}
											/>
										</Col>
									</Row>
								</Form.Group>

								{/* Currency pair */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Currency Pair:</Form.Label>

											<Form.Select
												onChange={handleChange}
												name="currencyPair"
												value={tradeData.currencyPair}
												required
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
												<option value="1">Long</option>
												<option value="2">Short</option>
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
												required={true}
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
												placeholder="comment about trade..."
												name="comment"
												value={tradeData.comment}
												required={true}
											/>
										</Col>
									</Row>
								</Form.Group>

								<div class="d-grid gap-2">
									<Button class="btn btn-primary" type="submit" onClick={handleClick}>
										Add Entry
									</Button>
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
