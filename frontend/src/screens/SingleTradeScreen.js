import React from "react";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// sampleDate
import trades from "../trades.js";
// from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";
const SingleTradeScreen = () => {
	// get the id parameter in the uri path
	const { id } = useParams();

	// find trade that matches id
	const trade = trades.find((trade) => trade.id === id);

	// calculate % return
	const precentageReturn = ((trade.profit / trade.accountBalance) * 100).toFixed(2);

	return (
		<Container>
			<Row className="justify-content-center">
				<Col className="col-lg-8 col-md-10">
					{/* Back button */}
					<Link to={"/trades"}>
						<Button type="button" className="btn btn-dark btn-lg rounded-0 mt-4">
							Back
						</Button>
					</Link>

					{/* Page Header */}
					<h1 className="text-center mt-5 mb-4">Daily Analysis</h1>

					{/* Trade DATE */}
					<h4 className=" mb-2">{trade.date}</h4>

					{/* Trade data */}
					<Table className="table-bordered table-striped table-sm">
						<thead className="table-dark">
							<tr>
								<th>Account Bal. ($)</th>
								<th>Type</th>
								<th>FX Pair</th>
								<th>Profit ($)</th>
								<th>% Return</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{trade.accountBalance}</td>
								<td>{trade.type}</td>
								<td>{trade.currencyPair}</td>
								<td>{trade.profit}</td>
								<td>{precentageReturn}</td>
							</tr>
						</tbody>
					</Table>

					{/* Trade Comment */}
					<hr className="mt-4" />
					<h4>Comment</h4>
					<p>{trade.comment}</p>
					<hr />
				</Col>
			</Row>
		</Container>
	);
};

export default SingleTradeScreen;

{
	/* <Row className="justify-content-center">
	<Col className="col-8">
		<ListGroup className="list-group-horizontal">
			<ListGroup.Item>This</ListGroup.Item>
			<ListGroup.Item>ListGroup</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>!</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>horizontally!</ListGroup.Item>
		</ListGroup>
	</Col>
	<Col className="col-8">
		<ListGroup className="list-group-horizontal">
			<ListGroup.Item>This</ListGroup.Item>
			<ListGroup.Item>ListGroup</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>horizontally!</ListGroup.Item>
			<ListGroup.Item>renders</ListGroup.Item>
			<ListGroup.Item>horizontally!</ListGroup.Item>
		</ListGroup>
	</Col>
</Row>; */
}
