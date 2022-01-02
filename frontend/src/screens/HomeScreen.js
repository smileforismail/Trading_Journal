import React from "react";
// components
import HomeTable from "../components/HomeTable.js";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const HomeScreen = () => {
	return (
		<div>
			<Container>
				{/* Buttons above table*/}
				<Container>
					<Row className="pt-4">
						<Col className="text-end">
							<Button type="button" className="btn btn-dark btn-lg rounded-0">
								New Entry
							</Button>
						</Col>
						<Col>
							<Button type="button" className="btn btn-dark btn-lg rounded-0">
								All Trades
							</Button>
						</Col>
					</Row>
				</Container>

				{/* Trade Track Record Table */}
				<HomeTable />
			</Container>
		</div>
	);
};

export default HomeScreen;
