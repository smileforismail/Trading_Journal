import { React, useState, useEffect } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// use axios to make requests to backend
import axios from "axios";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const AllTradesScreen = () => {
	const [tradesData, setTradesData] = useState([]);

	// get trades documents from db
	useEffect(() => {
		const fetchAllTrades = async () => {
			const { data } = await axios.get("http://localhost:4000/api/trades/");
			setTradesData(data);
		};
		fetchAllTrades();
	});

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

					{/* Page Header */}
					<h1 className="text-center mt-3 mb-4">All Trades</h1>

					<ListGroup className="list-group-flush">
						{/* Header List */}
						<ListGroup.Item className="list-group-item-info mb-2 mt-2">
							<Row>
								<Col className="text-start fw-bold">Trade</Col>
								<Col className="text-center fw-bold">Date Created</Col>
								{/* empty col for layout purposes */}
								<Col></Col>
							</Row>
						</ListGroup.Item>

						{/* display every trade in array */}
						{tradesData.map((trade) => {
							return (
								<ListGroup.Item key={trade.id}>
									<Row>
										<Col className="text-start">{trade.profit > 0 ? "Profit" : "Loss"}</Col>
										<Col className="text-center">{trade.date}</Col>
										<Col className="text-end">
											<Link to={`/trades/${trade.id}`}>View</Link>
										</Col>
									</Row>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default AllTradesScreen;
