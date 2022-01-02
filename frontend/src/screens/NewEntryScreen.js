import React from "react";
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

											<Form.Control type="number" placeholder="$0.00" />
										</Col>
									</Row>
								</Form.Group>

								{/* Currency pair */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Currency Pair:</Form.Label>

											<Form.Select>
												<option value="1">AUD/USD</option>
												<option value="2">GBP/USD</option>
												<option value="3">EUR/USD</option>
												<option value="4">USD/CAD</option>
											</Form.Select>
										</Col>
									</Row>
								</Form.Group>

								{/* Date */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Date:</Form.Label>

											<Form.Control type="date" />
										</Col>
									</Row>
								</Form.Group>

								{/* Type */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Type:</Form.Label>

											<Form.Select>
												<option value="1">Long</option>
												<option value="2">Short</option>
											</Form.Select>
										</Col>
									</Row>
								</Form.Group>

								{/* Note */}
								<Form.Group className="mb-3">
									<Row>
										<Col>
											<Form.Label>Note:</Form.Label>
											<Form.Control as={"textarea"} rows="3" placeholder="comment about trade..." />
										</Col>
									</Row>
								</Form.Group>

								<div class="d-grid gap-2">
									<Button class="btn btn-primary" type="button">
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
