import React from "react";
// routing
import { Link } from "react-router-dom";
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
							<Link to="/new-entry">
								<Button type="button" className="btn rounded-0">
									Add New Trade
								</Button>
							</Link>
						</Col>
						<Col>
							<Link to="/trades">
								<Button type="button" className="btn rounded-0">
									View All Trades
								</Button>
							</Link>
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
